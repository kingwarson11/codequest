import { useProgress } from '../hooks/useProgress'
import { courses } from '../data/courses'
import { Link } from 'react-router-dom'
import styles from './Profile.module.css'

export default function Profile() {
  const { progress, levelProgress, getCourseProgress, unlockedBadges, lockedBadges } = useProgress()

  const totalLessonsCompleted = Object.values(progress.completedLessons).flat().length
  const coursesStarted = Object.keys(progress.completedLessons).length

  return (
    <main className={styles.page}>
      <div className="container">
        <div className={styles.layout}>
          {/* Left: Profile card */}
          <aside className={styles.sidebar}>
            <div className={styles.profileCard}>
              <div className={styles.avatarRing} style={{ background: `conic-gradient(var(--accent) ${levelProgress.percent}%, rgba(255,255,255,0.08) 0%)` }}>
                <div className={styles.avatar}>{progress.level}</div>
              </div>
              <h2 className={styles.playerName}>Coder</h2>
              <div className={styles.levelTag}>Level {progress.level}</div>

              <div className={styles.xpBar}>
                <div className={styles.xpBarRow}>
                  <span>XP Progress</span>
                  <span>{levelProgress.current}/100</span>
                </div>
                <div className="progress-bar" style={{ height: 8 }}>
                  <div className="progress-bar-fill" style={{ width: `${levelProgress.percent}%` }} />
                </div>
                <p className={styles.xpNext}>{100 - levelProgress.current} XP to Level {progress.level + 1}</p>
              </div>

              <div className={styles.statsGrid}>
                <div className={styles.statBox}>
                  <span className={styles.statNum}>{progress.xp}</span>
                  <span className={styles.statLabel}>Total XP</span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statNum}>{totalLessonsCompleted}</span>
                  <span className={styles.statLabel}>Lessons Done</span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statNum}>{coursesStarted}</span>
                  <span className={styles.statLabel}>Courses Started</span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statNum}>{unlockedBadges.length}</span>
                  <span className={styles.statLabel}>Badges Earned</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Right: Progress + Badges */}
          <div className={styles.main}>
            {/* Course Progress */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Course Progress</h2>
              {courses.map(course => {
                const cp = getCourseProgress(course.id, course.lessons)
                return (
                  <Link to={`/course/${course.id}`} key={course.id} className={styles.courseRow} style={{ '--c': course.color }}>
                    <span className={styles.courseEmoji}>{course.emoji}</span>
                    <div className={styles.courseInfo}>
                      <div className={styles.courseRowTop}>
                        <span className={styles.courseName}>{course.title}</span>
                        <span className={styles.coursePct}>{cp.percent}%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-bar-fill" style={{ width: `${cp.percent}%`, background: course.color }} />
                      </div>
                      <span className={styles.courseMeta}>{cp.done}/{cp.total} lessons · {course.xp} XP total</span>
                    </div>
                    {cp.done === 0 && <span className={styles.startLink}>Start →</span>}
                    {cp.done > 0 && cp.percent < 100 && <span className={styles.continueLink} style={{ color: course.color }}>Continue →</span>}
                    {cp.percent === 100 && <span className={styles.doneTag}>✓</span>}
                  </Link>
                )
              })}
            </section>

            {/* Badges */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Badges</h2>
              <div className={styles.badgeGrid}>
                {unlockedBadges.map(b => (
                  <div key={b.id} className={styles.badge}>
                    <div className={styles.badgeEmoji}>{b.emoji}</div>
                    <div className={styles.badgeInfo}>
                      <span className={styles.badgeTitle}>{b.title}</span>
                      <span className={styles.badgeDesc}>{b.desc}</span>
                    </div>
                    <span className={styles.badgeDone}>✓</span>
                  </div>
                ))}
                {lockedBadges.map(b => (
                  <div key={b.id} className={`${styles.badge} ${styles.badgeLocked}`}>
                    <div className={styles.badgeEmoji} style={{ filter: 'grayscale(1) opacity(0.3)' }}>{b.emoji}</div>
                    <div className={styles.badgeInfo}>
                      <span className={styles.badgeTitle}>{b.title}</span>
                      <span className={styles.badgeDesc}>{b.desc}</span>
                    </div>
                    <span className={styles.badgeLock}>🔒</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
