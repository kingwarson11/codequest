import { useParams, Link } from 'react-router-dom'
import { getCourse } from '../data/courses'
import { useProgress } from '../hooks/useProgress'
import styles from './CoursePage.module.css'

export default function CoursePage() {
  const { courseId } = useParams()
  const course = getCourse(courseId)
  const { getCourseProgress, isLessonComplete } = useProgress()

  if (!course) return (
    <div style={{ padding: '80px 24px', textAlign: 'center' }}>
      <h2>Course not found</h2>
      <Link to="/courses" className="btn btn-outline" style={{ marginTop: 16 }}>← Back to Courses</Link>
    </div>
  )

  const cp = getCourseProgress(courseId, course.lessons)

  return (
    <main className={styles.page}>
      {/* Hero */}
      <div className={styles.hero} style={{ '--c': course.color }}>
        <div className={styles.heroBg} />
        <div className="container">
          <Link to="/courses" className={styles.back}>← All Courses</Link>
          <div className={styles.heroContent}>
            <span className={styles.emoji}>{course.emoji}</span>
            <div>
              <div className={styles.meta}>
                <span className={styles.diffTag}>{course.difficulty}</span>
                <span className={styles.metaItem}>📚 {course.lessons} lessons</span>
                <span className={styles.metaItem}>🛠️ {course.projects} projects</span>
                <span className={styles.metaItem}>⚡ {course.xp} XP</span>
              </div>
              <h1 className={styles.title}>{course.title}</h1>
              <p className={styles.desc}>{course.description}</p>
              {cp.done > 0 && (
                <div className={styles.progressBlock}>
                  <div className={styles.progressRow}>
                    <span>{cp.done} of {cp.total} lessons complete</span>
                    <span>{cp.percent}%</span>
                  </div>
                  <div className="progress-bar" style={{ height: 8 }}>
                    <div className="progress-bar-fill" style={{ width: `${cp.percent}%`, background: course.color }} />
                  </div>
                </div>
              )}
              <Link
                to={`/course/${courseId}/lesson/1`}
                className={styles.startBtn}
                style={{ background: course.color }}
              >
                {cp.done > 0 ? 'Continue Learning' : 'Start Course'} →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.body}>
          {/* Left: Lessons + Projects */}
          <div className={styles.main}>
            {/* Topics */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>What You'll Learn</h2>
              <div className={styles.topics}>
                {course.topics.map(t => (
                  <div key={t} className={styles.topicItem}>
                    <span className={styles.check} style={{ color: course.color }}>✓</span>
                    {t}
                  </div>
                ))}
              </div>
            </section>

            {/* Lessons */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Lessons</h2>
              <div className={styles.lessonList}>
                {course.lessons_data.map((lesson, i) => {
                  const done = isLessonComplete(courseId, lesson.id)
                  return (
                    <Link
                      key={lesson.id}
                      to={`/course/${courseId}/lesson/${lesson.id}`}
                      className={`${styles.lessonItem} ${done ? styles.lessonDone : ''}`}
                    >
                      <div className={styles.lessonNum} style={{ borderColor: done ? course.color : 'var(--border)' }}>
                        {done ? <span style={{ color: course.color }}>✓</span> : i + 1}
                      </div>
                      <div className={styles.lessonInfo}>
                        <span className={styles.lessonTitle}>{lesson.title}</span>
                        <span className={styles.lessonXP}>+{lesson.xp} XP</span>
                      </div>
                      <span className={styles.lessonArrow}>→</span>
                    </Link>
                  )
                })}
                {/* Placeholder locked lessons */}
                {Array.from({ length: course.lessons - course.lessons_data.length }, (_, i) => (
                  <div key={`locked-${i}`} className={`${styles.lessonItem} ${styles.lessonLocked}`}>
                    <div className={styles.lessonNum}>🔒</div>
                    <div className={styles.lessonInfo}>
                      <span className={styles.lessonTitle}>Coming Soon</span>
                      <span className={styles.lessonXP}>+20 XP</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Projects</h2>
              <div className={styles.projectGrid}>
                {course.projects_list.map(p => (
                  <div key={p.title} className={styles.projectCard}>
                    <div className={styles.projHeader}>
                      <span className={styles.projDiff} style={{
                        color: p.difficulty === 'Easy' ? '#10b981' : p.difficulty === 'Medium' ? '#f59e0b' : '#ef4444',
                        background: p.difficulty === 'Easy' ? 'rgba(16,185,129,0.1)' : p.difficulty === 'Medium' ? 'rgba(245,158,11,0.1)' : 'rgba(239,68,68,0.1)',
                      }}>{p.difficulty}</span>
                      <span className={styles.projXP}>⚡ {p.xp} XP</span>
                    </div>
                    <h3 className={styles.projTitle}>{p.title}</h3>
                    <button className={styles.projBtn} style={{ borderColor: course.color, color: course.color }}>
                      View Project →
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right: Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sideCard}>
              <h3 className={styles.sideTitle}>Your Progress</h3>
              <div className={styles.progressCircle}>
                <svg viewBox="0 0 80 80" width="80" height="80">
                  <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
                  <circle
                    cx="40" cy="40" r="34"
                    fill="none"
                    stroke={course.color}
                    strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 34}`}
                    strokeDashoffset={`${2 * Math.PI * 34 * (1 - cp.percent / 100)}`}
                    strokeLinecap="round"
                    transform="rotate(-90 40 40)"
                    style={{ transition: 'stroke-dashoffset 1s ease' }}
                  />
                  <text x="40" y="45" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" fontFamily="Space Mono">{cp.percent}%</text>
                </svg>
              </div>
              <div className={styles.progressStats}>
                <div className={styles.pStat}>
                  <span className={styles.pStatNum}>{cp.done}</span>
                  <span className={styles.pStatLabel}>Completed</span>
                </div>
                <div className={styles.pStat}>
                  <span className={styles.pStatNum}>{cp.total - cp.done}</span>
                  <span className={styles.pStatLabel}>Remaining</span>
                </div>
              </div>
            </div>

            <div className={styles.sideCard}>
              <h3 className={styles.sideTitle}>Topics Covered</h3>
              <div className={styles.topicPills}>
                {course.topics.map(t => (
                  <span key={t} className={styles.topicPill}>{t}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
