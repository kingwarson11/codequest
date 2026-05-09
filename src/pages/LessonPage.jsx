import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCourse } from '../data/courses'
import { useProgress } from '../hooks/useProgress'
import styles from './LessonPage.module.css'

export default function LessonPage() {
  const { courseId, lessonId } = useParams()
  const navigate = useNavigate()
  const course = getCourse(courseId)
  const { completeLesson, isLessonComplete } = useProgress()
  const [tab, setTab] = useState('theory')
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')
  const [challengeAnswer, setChallengeAnswer] = useState('')
  const [showHint, setShowHint] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [xpAnim, setXpAnim] = useState(null)

  const lessonIdNum = parseInt(lessonId)
  const lesson = course?.lessons_data.find(l => l.id === lessonIdNum)
  const alreadyDone = isLessonComplete(courseId, lessonIdNum)
  const nextLesson = course?.lessons_data.find(l => l.id === lessonIdNum + 1)

  useEffect(() => {
    if (lesson) setCode(lesson.code)
  }, [lesson])

  if (!course || !lesson) return (
    <div style={{ padding: '80px 24px', textAlign: 'center' }}>
      <h2>Lesson not found</h2>
      <Link to={`/course/${courseId}`} className="btn btn-outline" style={{ marginTop: 16 }}>← Back to Course</Link>
    </div>
  )

  const handleRunCode = () => {
    // Simulated code runner — shows the example output with a terminal feel
    const lines = code.split('\n').filter(l => l.trim().startsWith('print(') || l.trim().startsWith('console.log(') || l.trim().startsWith('echo') || l.trim().startsWith('git'))
    if (lines.length === 0) {
      setOutput('> Code executed successfully.\n> (No output statements found)')
      return
    }
    const simulated = lines.map(line => {
      const match = line.match(/print\((.+)\)/) || line.match(/console\.log\((.+)\)/)
      if (match) {
        let val = match[1].trim()
        val = val.replace(/f?"([^"]*)"/, '$1').replace(/f?'([^']*)'/, '$1')
        val = val.replace(/\{name\}/g, 'Alex').replace(/\{score\}/g, '100').replace(/\{age\}/g, '25').replace(/\{level\}/g, '5')
        return `> ${val}`
      }
      return `> ${line.trim()}`
    }).join('\n')
    setOutput(simulated || '> Executed successfully.')
  }

  const handleComplete = () => {
    if (!alreadyDone) {
      completeLesson(courseId, lessonIdNum, lesson.xp)
      // XP animation
      setXpAnim({ x: window.innerWidth / 2 - 40, y: window.innerHeight / 2 })
      setTimeout(() => setXpAnim(null), 1600)
    }
    setCompleted(true)
  }

  const lessonIndex = course.lessons_data.findIndex(l => l.id === lessonIdNum)
  const progress = Math.round(((lessonIndex + 1) / course.lessons_data.length) * 100)

  return (
    <main className={styles.page}>
      {/* XP float animation */}
      {xpAnim && (
        <div className="xp-float" style={{ left: xpAnim.x, top: xpAnim.y }}>
          +{lesson.xp} XP ⚡
        </div>
      )}

      {/* Top bar */}
      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          <Link to={`/course/${courseId}`} className={styles.back}>
            ← {course.title}
          </Link>
          <span className={styles.lessonLabel}>
            {course.emoji} Lesson {lessonIdNum}: {lesson.title}
          </span>
        </div>
        <div className={styles.topRight}>
          <div className={styles.barWrap}>
            <div className={styles.barFill} style={{ width: `${progress}%`, background: course.color }} />
          </div>
          <span className={styles.barLabel}>{lessonIndex + 1}/{course.lessons_data.length}</span>
          {alreadyDone && <span className={styles.doneTag}>✓ Completed</span>}
          <span className={styles.xpTag} style={{ color: course.color }}>+{lesson.xp} XP</span>
        </div>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        {['theory', 'code', 'challenge'].map(t => (
          <button
            key={t}
            className={`${styles.tab} ${tab === t ? styles.tabActive : ''}`}
            style={tab === t ? { borderColor: course.color, color: course.color } : {}}
            onClick={() => setTab(t)}
          >
            {t === 'theory' ? '📖 Theory' : t === 'code' ? '💻 Code' : '🎯 Challenge'}
          </button>
        ))}
      </div>

      <div className={styles.content}>
        {/* THEORY TAB */}
        {tab === 'theory' && (
          <div className={styles.theory}>
            <div className={styles.theoryContent}>
              <h1 className={styles.theoryTitle}>{lesson.title}</h1>
              <div className={styles.theoryText}>
                {lesson.theory.split('\n').map((line, i) => {
                  if (line.startsWith('```')) return null
                  if (line.startsWith('- ')) return (
                    <li key={i} className={styles.theoryLi}>
                      {renderInline(line.slice(2))}
                    </li>
                  )
                  if (line === '') return <br key={i} />
                  return <p key={i}>{renderInline(line)}</p>
                })}
              </div>
              <div className={styles.theoryActions}>
                <button className={styles.nextTabBtn} style={{ background: course.color }} onClick={() => setTab('code')}>
                  Try the Code →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CODE TAB */}
        {tab === 'code' && (
          <div className={styles.codeTab}>
            <div className={styles.editorPanel}>
              <div className={styles.editorHeader}>
                <div className={styles.dots}>
                  <span style={{ background: '#ff5f57' }} />
                  <span style={{ background: '#ffbd2e' }} />
                  <span style={{ background: '#28c840' }} />
                </div>
                <span className={styles.filename}>
                  {courseId === 'python' ? 'main.py' : courseId === 'html' ? 'index.html' : courseId === 'css' ? 'style.css' : courseId === 'javascript' ? 'script.js' : courseId === 'git' ? 'terminal' : 'App.jsx'}
                </span>
                <button className={styles.runBtn} onClick={handleRunCode}>▶ Run</button>
              </div>
              <textarea
                className={styles.editor}
                value={code}
                onChange={e => setCode(e.target.value)}
                spellCheck={false}
              />
            </div>
            <div className={styles.outputPanel}>
              <div className={styles.outputHeader}>
                <span>Output</span>
                <button className={styles.clearBtn} onClick={() => setOutput('')}>Clear</button>
              </div>
              <div className={styles.output}>
                {output ? output : <span className={styles.outputPlaceholder}>Click ▶ Run to see output</span>}
              </div>
              <div className={styles.editorActions}>
                <button className={styles.resetBtn} onClick={() => setCode(lesson.code)}>↺ Reset</button>
                <button className={styles.nextTabBtn2} style={{ background: course.color }} onClick={() => setTab('challenge')}>
                  Go to Challenge →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CHALLENGE TAB */}
        {tab === 'challenge' && (
          <div className={styles.challengeTab}>
            {!completed ? (
              <>
                <div className={styles.challengeBox}>
                  <div className={styles.challengeIcon}>🎯</div>
                  <h2 className={styles.challengeTitle}>Challenge</h2>
                  <p className={styles.challengeDesc}>{lesson.challenge}</p>

                  {showHint && (
                    <div className={styles.hint}>
                      <span className={styles.hintLabel}>💡 Hint</span>
                      <p>{lesson.hint}</p>
                    </div>
                  )}

                  <textarea
                    className={styles.challengeEditor}
                    placeholder="Write your solution here..."
                    value={challengeAnswer}
                    onChange={e => setChallengeAnswer(e.target.value)}
                    rows={8}
                  />

                  <div className={styles.challengeActions}>
                    <button
                      className={styles.hintBtn}
                      onClick={() => setShowHint(!showHint)}
                    >
                      {showHint ? 'Hide Hint' : '💡 Show Hint'}
                    </button>
                    <button
                      className={styles.completeBtn}
                      style={{ background: course.color }}
                      onClick={handleComplete}
                      disabled={challengeAnswer.trim().length < 5}
                    >
                      ✓ Mark as Complete (+{lesson.xp} XP)
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className={styles.completedBox}>
                <div className={styles.completedEmoji}>🎉</div>
                <h2>Lesson Complete!</h2>
                <p>You earned <strong style={{ color: course.color }}>+{lesson.xp} XP</strong></p>
                <div className={styles.completedActions}>
                  {nextLesson ? (
                    <Link
                      to={`/course/${courseId}/lesson/${nextLesson.id}`}
                      className={styles.nextLessonBtn}
                      style={{ background: course.color }}
                      onClick={() => { setCompleted(false); setTab('theory'); setOutput(''); setChallengeAnswer(''); setShowHint(false); }}
                    >
                      Next Lesson: {nextLesson.title} →
                    </Link>
                  ) : (
                    <Link to={`/course/${courseId}`} className={styles.nextLessonBtn} style={{ background: course.color }}>
                      ← Back to Course
                    </Link>
                  )}
                  <Link to="/courses" className="btn btn-outline">All Courses</Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}

function renderInline(text) {
  // Render **bold** and `code` inline
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/)
  return parts.map((p, i) => {
    if (p.startsWith('`') && p.endsWith('`')) return <code key={i} className="inline-code">{p.slice(1, -1)}</code>
    if (p.startsWith('**') && p.endsWith('**')) return <strong key={i}>{p.slice(2, -2)}</strong>
    return p
  })
}
