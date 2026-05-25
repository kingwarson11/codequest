import { useParams, Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { getCourse } from '../data/courses'
import { useProgress } from '../hooks/useProgress'
import { validateChallenge } from '../utils/validateChallenge'
import styles from './LessonPage.module.css'

function runJavaScript(code) {
  const logs = []
  const sandbox = {
    console: {
      log:   (...a) => logs.push(a.map(x => typeof x === 'object' ? JSON.stringify(x, null, 2) : String(x)).join(' ')),
      error: (...a) => logs.push('❌ ' + a.join(' ')),
      warn:  (...a) => logs.push('⚠️  ' + a.join(' ')),
      info:  (...a) => logs.push('ℹ️  ' + a.join(' ')),
    },
    setTimeout: () => {}, setInterval: () => {},
    alert: (m) => logs.push('alert: ' + m),
  }
  try {
    const fn = new Function(...Object.keys(sandbox), code)
    fn(...Object.values(sandbox))
    return logs.length ? logs.join('\n') : '✓ Executed (no console.log output)'
  } catch (err) {
    return `❌ ${err.name}: ${err.message}`
  }
}

function getFilename(courseId) {
  const map = { python:'main.py', html:'index.html', css:'style.css', javascript:'script.js', react:'App.jsx', git:'terminal', dsa:'solution.py' }
  return map[courseId] || 'main.py'
}

function getLang(courseId) {
  if (['python','dsa'].includes(courseId)) return 'python'
  if (['javascript','react'].includes(courseId)) return 'javascript'
  return courseId
}

function OutputBlock({ val, placeholder }) {
  if (!val) return <span className={styles.outputPlaceholder}>{placeholder || 'Click ▶ Run to see output'}</span>
  if (val.startsWith('__HTML__:')) return <iframe className={styles.preview} srcDoc={val.slice(9)} title="preview" sandbox="allow-scripts" />
  if (val.startsWith('__CSS__:')) {
    const wrap = `<!DOCTYPE html><html><head><style>${val.slice(8)}</style></head><body><div class="box" style="width:160px;height:160px;margin:40px auto;background:linear-gradient(135deg,#00ff9f,#7c3aed);border-radius:16px"></div></body></html>`
    return <iframe className={styles.preview} srcDoc={wrap} title="preview" sandbox="allow-scripts" />
  }
  return <>{val.split('\n').map((l, i) => <div key={i}>{l || '\u00A0'}</div>)}</>
}

export default function LessonPage() {
  const { courseId, lessonId } = useParams()
  const course = getCourse(courseId)
  const { completeLesson, isLessonComplete } = useProgress()

  const [tab, setTab]                         = useState('theory')
  const [code, setCode]                       = useState('')
  const [output, setOutput]                   = useState('')
  const [running, setRunning]                 = useState(false)
  const [challengeAnswer, setChallengeAnswer] = useState('')
  const [challengeOutput, setChallengeOutput] = useState('')
  const [challengeRunning, setChallengeRunning] = useState(false)
  const [showHint, setShowHint]               = useState(false)
  const [completed, setCompleted]             = useState(false)
  const [xpAnim, setXpAnim]                   = useState(null)
  const [pyReady, setPyReady]                 = useState(false)
  const [pyLoading, setPyLoading]             = useState(false)
  // validation feedback
  const [validationMsg, setValidationMsg]     = useState('')
  const [validationOk, setValidationOk]       = useState(null) // null | true | false
  const pyodideRef = useRef(null)

  const lessonIdNum = parseInt(lessonId)
  const lesson      = course?.lessons_data.find(l => l.id === lessonIdNum)
  const alreadyDone = isLessonComplete(courseId, lessonIdNum)
  const nextLesson  = course?.lessons_data.find(l => l.id === lessonIdNum + 1)
  const lang        = getLang(courseId)

  useEffect(() => {
    if (lesson) {
      setCode(lesson.code)
      setOutput(''); setChallengeAnswer(''); setChallengeOutput('')
      setCompleted(false); setTab('theory'); setShowHint(false)
      setValidationMsg(''); setValidationOk(null)
    }
  }, [lesson?.id, courseId])

  useEffect(() => {
    if (!['python','dsa'].includes(courseId)) return
    if (pyodideRef.current || pyLoading) return
    setPyLoading(true)
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js'
    script.onload = async () => {
      try {
        const py = await window.loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/' })
        pyodideRef.current = py
        setPyReady(true)
      } catch (_) {}
      setPyLoading(false)
    }
    script.onerror = () => setPyLoading(false)
    document.head.appendChild(script)
  }, [courseId])

  async function execCode(src, setOut, setLoad) {
    if (lang === 'html') { setOut('__HTML__:' + src); return }
    if (lang === 'css')  { setOut('__CSS__:' + src); return }
    if (lang === 'git') {
      const lines = src.split('\n').filter(l => l.trim() && !l.trim().startsWith('#'))
      setOut(lines.map(l => `$ ${l.trim()}\n  ✓ command recognised`).join('\n'))
      return
    }
    if (lang === 'javascript') { setOut(runJavaScript(src)); return }
    if (!pyodideRef.current) { setOut('⏳ Python engine loading (~5s)…'); return }
    setLoad(true); setOut('⏳ Running…')
    try {
      pyodideRef.current.runPython(`import sys, io\nsys.stdout = io.StringIO()`)
      pyodideRef.current.runPython(src)
      const result = pyodideRef.current.runPython('sys.stdout.getvalue()')
      try { pyodideRef.current.runPython('sys.stdout = sys.__stdout__') } catch (_) {}
      setOut(result || '✓ Executed (no print output)')
    } catch (err) {
      try { pyodideRef.current.runPython('sys.stdout = sys.__stdout__') } catch (_) {}
      const msg = String(err).split('\n').filter(l => !l.includes('File "<exec>"') && !l.includes('pyodide')).join('\n').trim()
      setOut('❌ ' + (msg || String(err)))
    }
    setLoad(false)
  }

  const handleRunCode = () => execCode(code, setOutput, setRunning)

  const handleRunChallenge = async () => {
    setValidationMsg(''); setValidationOk(null)
    await execCode(challengeAnswer, setChallengeOutput, setChallengeRunning)
  }

  // Ctrl+Enter / Cmd+Enter to run code
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault()
        if (tab === 'code') handleRunCode()
        if (tab === 'challenge' && challengeAnswer.trim().length >= 2) handleRunChallenge()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [tab, code, challengeAnswer, running, challengeRunning])



  const handleSubmit = () => {
    const result = validateChallenge({
      lesson,
      courseId,
      answer: challengeAnswer,
      output: challengeOutput,
    })
    setValidationMsg(result.message)
    setValidationOk(result.pass)

    if (result.pass) {
      if (!alreadyDone) {
        completeLesson(courseId, lessonIdNum, lesson.xp)
        setXpAnim({ x: window.innerWidth / 2 - 40, y: window.innerHeight / 2 })
        setTimeout(() => setXpAnim(null), 1600)
      }
      setTimeout(() => setCompleted(true), 800)
    }
  }

  if (!course || !lesson) return (
    <div style={{ padding: '80px 24px', textAlign: 'center' }}>
      <h2>Lesson not found</h2>
      <Link to={`/course/${courseId}`} className="btn btn-outline" style={{ marginTop: 16 }}>{'←'} Back to Course</Link>
    </div>
  )

  const lessonIndex = course.lessons_data.findIndex(l => l.id === lessonIdNum)
  const progress    = Math.round(((lessonIndex + 1) / course.lessons_data.length) * 100)
  const filename    = getFilename(courseId)
  const isPreview   = output.startsWith('__HTML__:') || output.startsWith('__CSS__:')
  const isChallengePreview = challengeOutput.startsWith('__HTML__:') || challengeOutput.startsWith('__CSS__:')

  return (
    <main className={styles.page}>
      {xpAnim && (
        <div className="xp-float" style={{ left: xpAnim.x, top: xpAnim.y }}>
          +{lesson.xp} XP ⚡
        </div>
      )}

      {/* Top bar */}
      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          <Link to={`/course/${courseId}`} className={styles.back}>← {course.title}</Link>
          <span className={styles.lessonLabel}>{course.emoji} Lesson {lessonIdNum}: {lesson.title}</span>
        </div>
        <div className={styles.topRight}>
          <div className={styles.barWrap}>
            <div className={styles.barFill} style={{ width: `${progress}%`, background: course.color }} />
          </div>
          <span className={styles.barLabel}>{lessonIndex + 1}/{course.lessons_data.length}</span>
          {alreadyDone && <span className={styles.doneTag}>{'✓'} Completed</span>}
          {pyLoading && <span className={styles.doneTag} style={{ color:'#fbbf24', borderColor:'rgba(251,191,36,0.3)' }}>{'⏳'} Loading Python{'…'}</span>}
          <span className={styles.xpTag} style={{ color: course.color }}>+{lesson.xp} XP</span>
        </div>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        {['theory','code','challenge'].map(t => (
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

        {/* ── THEORY ── */}
        {tab === 'theory' && (
          <div className={styles.theory}>
            <div className={styles.theoryContent}>
              <h1 className={styles.theoryTitle}>{lesson.title}</h1>
              <div className={styles.theoryText}>
                {lesson.theory.split('\n').map((line, i) => {
                  if (line.startsWith('```')) return null
                  if (line.startsWith('- ')) return <li key={i} className={styles.theoryLi}>{renderInline(line.slice(2))}</li>
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

        {/* ── CODE ── */}
        {tab === 'code' && (
          <div className={styles.codeTab}>
            <div className={styles.editorPanel}>
              <div className={styles.editorHeader}>
                <div className={styles.dots}>
                  <span style={{ background:'#ff5f57' }} /><span style={{ background:'#ffbd2e' }} /><span style={{ background:'#28c840' }} />
                </div>
                <span className={styles.filename}>{filename}</span>
                <button className={styles.runBtn} onClick={handleRunCode} disabled={running || (lang==='python' && pyLoading)} title='Run code (Ctrl+Enter)'>
                  {lang==='python' && pyLoading ? '⏳ Loading Python…' : running ? '⏳ Running…' : '▶ Run'}
                </button>
              </div>
              <textarea className={styles.editor} value={code} onChange={e => setCode(e.target.value)} spellCheck={false} />
            </div>
            <div className={styles.outputPanel}>
              <div className={styles.outputHeader}>
                <span>{isPreview ? 'Preview' : 'Output'}</span>
                <button className={styles.clearBtn} onClick={() => setOutput('')}>Clear</button>
              </div>
              <div className={isPreview ? styles.previewWrap : styles.output}>
                <OutputBlock val={output} placeholder="Click ▶ Run to see output" />
              </div>
              <div className={styles.editorActions}>
                <button className={styles.resetBtn} onClick={() => { setCode(lesson.code); setOutput('') }}>{'↺'} Reset</button>
                <button className={styles.nextTabBtn2} style={{ background: course.color }} onClick={() => setTab('challenge')}>
                  Go to Challenge →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── CHALLENGE ── */}
        {tab === 'challenge' && (
          <div className={styles.challengeTab}>
            {!completed ? (
              <div className={styles.challengeBox}>
                <div className={styles.challengeIcon}>{'🎯'}</div>
                <h2 className={styles.challengeTitle}>Challenge</h2>
                <p className={styles.challengeDesc}>{lesson.challenge}</p>

                {showHint && (
                  <div className={styles.hint}>
                    <span className={styles.hintLabel}>{'💡'} Hint</span>
                    <p>{lesson.hint}</p>
                  </div>
                )}

                {/* Challenge editor */}
                <div className={styles.codeTab} style={{ height:'auto', minHeight:260 }}>
                  <div className={styles.editorPanel} style={{ minHeight:200 }}>
                    <div className={styles.editorHeader}>
                      <div className={styles.dots}>
                        <span style={{ background:'#ff5f57' }} /><span style={{ background:'#ffbd2e' }} /><span style={{ background:'#28c840' }} />
                      </div>
                      <span className={styles.filename}>{filename}</span>
                      <button
                        className={styles.runBtn}
                        onClick={handleRunChallenge}
                        disabled={challengeRunning || challengeAnswer.trim().length < 2 || (lang==='python' && pyLoading)}
                      >
                        {lang==='python' && pyLoading ? '⏳ Loading…' : challengeRunning ? '⏳ Running…' : '▶ Run My Code'}
                      </button>
                    </div>
                    <textarea
                      className={styles.editor}
                      placeholder={`Write your ${lang === 'git' ? 'git commands' : lang} solution here…`}
                      value={challengeAnswer}
                      onChange={e => { setChallengeAnswer(e.target.value); setValidationMsg(''); setValidationOk(null) }}
                      spellCheck={false}
                      style={{ minHeight:160 }}
                    />
                  </div>
                  {challengeOutput && (
                    <div className={styles.outputPanel} style={{ minHeight:100 }}>
                      <div className={styles.outputHeader}>
                        <span>{isChallengePreview ? 'Preview' : 'Your Output'}</span>
                        <button className={styles.clearBtn} onClick={() => { setChallengeOutput(''); setValidationMsg(''); setValidationOk(null) }}>Clear</button>
                      </div>
                      <div className={isChallengePreview ? styles.previewWrap : styles.output}>
                        <OutputBlock val={challengeOutput} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Validation feedback banner */}
                {validationMsg && (
                  <div className={styles.validationBanner} style={{
                    background: validationOk ? 'rgba(0,255,159,0.08)' : 'rgba(244,63,94,0.08)',
                    border: `1px solid ${validationOk ? 'rgba(0,255,159,0.3)' : 'rgba(244,63,94,0.3)'}`,
                    color: validationOk ? '#00ff9f' : '#f87171',
                  }}>
                    {validationMsg}
                  </div>
                )}

                <div className={styles.challengeActions}>
                  <button className={styles.hintBtn} onClick={() => setShowHint(!showHint)}>
                    {showHint ? 'Hide Hint' : '💡 Show Hint'}
                  </button>
                  <button
                    className={styles.completeBtn}
                    style={{ background: course.color }}
                    onClick={handleSubmit}
                    disabled={challengeAnswer.trim().length < 5}
                  >
                    ✓ Submit Answer (+{lesson.xp} XP)
                  </button>
                </div>
              </div>
            ) : (
              <div className={styles.completedBox}>
                <div className={styles.completedEmoji}>{'🎉'}</div>
                <h2>Lesson Complete!</h2>
                <p>You earned <strong style={{ color: course.color }}>+{lesson.xp} XP</strong></p>
                <div className={styles.completedActions}>
                  {nextLesson ? (
                    <Link
                      to={`/course/${courseId}/lesson/${nextLesson.id}`}
                      className={styles.nextLessonBtn}
                      style={{ background: course.color }}
                      onClick={() => { setCompleted(false); setTab('theory'); setOutput(''); setChallengeAnswer(''); setChallengeOutput(''); setShowHint(false); setValidationMsg(''); setValidationOk(null) }}
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
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/)
  return parts.map((p, i) => {
    if (p.startsWith('`') && p.endsWith('`')) return <code key={i} className="inline-code">{p.slice(1, -1)}</code>
    if (p.startsWith('**') && p.endsWith('**')) return <strong key={i}>{p.slice(2, -2)}</strong>
    return p
  })
}
