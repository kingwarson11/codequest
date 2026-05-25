import { useProgress } from '../hooks/useProgress'
import { courses } from '../data/courses'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import styles from './Profile.module.css'

export default function Profile() {
  const {
    progress, levelProgress, getCourseProgress,
    unlockedBadges, lockedBadges, setUsername, resetProgress
  } = useProgress()

  const [editingName, setEditingName] = useState(false)
  const [nameInput,   setNameInput]   = useState(progress.username || 'Coder')
  const [showReset,   setShowReset]   = useState(false)

  const totalLessonsCompleted = Object.values(progress.completedLessons).flat().length
  const coursesStarted        = Object.keys(progress.completedLessons).length

  const saveName = () => {
    const trimmed = nameInput.trim()
    if (trimmed.length > 0) setUsername(trimmed)
    setEditingName(false)
  }

  return (
    <main className={styles.page}>
      <div className="container">
        <div className={styles.layout}>

          {/* ── Sidebar ── */}
          <aside className={styles.sidebar}>
            <div className={styles.profileCard}>

              {/* Avatar ring */}
              <div
                className={styles.avatarRing}
                style={{ background: `conic-gradient(var(--accent) ${levelProgress.percent}%, rgba(255,255,255,0.08) 0%)` }}
              >
                <div className={styles.avatar}>{progress.level}</div>
              </div>

              {/* Name (editable) */}
              {editingName ? (
                <div className={styles.nameEdit}>
                  <input
                    className={styles.nameInput}
                    value={nameInput}
                    onChange={e => setNameInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && saveName()}
                    autoFocus
                    maxLength={20}
                  />
                  <button className={styles.saveName} onClick={saveName}>Save</button>
                </div>
              ) : (
                <div className={styles.nameRow}>
                  <h2 className={styles.playerName}>{progress.username || 'Coder'}</h2>
                  <button className={styles.editBtn} onClick={() => { setNameInput(progress.username || 'Coder'); setEditingName(true) }} title="Edit name">✏️</button>
                </div>
              )}

              <div className={styles.levelTag}>Level {progress.level}</div>

              {/* Streak */}
              {progress.streak >= 1 && (
                <div className={styles.streakRow}>
                  <span className={styles.streakFire}>🔥</span>
                  <span className={styles.streakNum}>{progress.streak}-day streak</span>
                </div>
              )}

              {/* XP bar */}
              <div className={styles.xpBar}>
                <div className={styles.xpBarRow}>
                  <span>XP Progress</span>
                  <span>{levelProgress.current} / 100</span>
                </div>
                <div className="progress-bar" style={{ height: 8 }}>
                  <div className="progress-bar-fill" style={{ width: `${levelProgress.percent}%` }} />
                </div>
                <p className={styles.xpNext}>{100 - levelProgress.current} XP to Level {progress.level + 1}</p>
              </div>

              {/* Stats grid */}
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
                  <span className={styles.statLabel}>Badges</span>
                </div>
              </div>

              {/* Reset button */}
              {!showReset ? (
                <button className={styles.resetTrigger} onClick={() => setShowReset(true)}>
                  Reset Progress
                </button>
              ) : (
                <div className={styles.resetConfirm}>
                  <p>Are you sure? This deletes all your XP, lessons, and badges.</p>
                  <div className={styles.resetBtns}>
                    <button className={styles.resetYes} onClick={() => { resetProgress(); setShowReset(false) }}>
                      Yes, reset
                    </button>
                    <button className={styles.resetNo} onClick={() => setShowReset(false)}>
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* ── Main ── */}
          <div className={styles.main}>

            {/* Course progress */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Course Progress</h2>
              {courses.map(course => {
                // Use lessons_data.length as denominator — only count lessons that exist
                const builtLessons = course.lessons_data.length
                const cp = getCourseProgress(course.id, builtLessons)
                return (
                  <Link
                    to={`/course/${course.id}`}
                    key={course.id}
                    className={styles.courseRow}
                    style={{ '--c': course.color }}
                  >
                    <span className={styles.courseEmoji}>{course.emoji}</span>
                    <div className={styles.courseInfo}>
                      <div className={styles.courseRowTop}>
                        <span className={styles.courseName}>{course.title}</span>
                        <span className={styles.coursePct}>{cp.percent}%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-bar-fill" style={{ width: `${cp.percent}%`, background: course.color }} />
                      </div>
                      <span className={styles.courseMeta}>
                        {cp.done}/{cp.total} lessons complete · {course.xp} XP total
                      </span>
                    </div>
                    {cp.done === 0   && <span className={styles.startLink}>Start →</span>}
                    {cp.done > 0 && cp.percent < 100 && <span className={styles.continueLink} style={{ color: course.color }}>Continue →</span>}
                    {cp.percent === 100 && <span className={styles.doneTag}>✓ Done</span>}
                  </Link>
                )
              })}
            </section>

            {/* Badges */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Badges
                <span className={styles.badgeCount}>{unlockedBadges.length}/{unlockedBadges.length + lockedBadges.length}</span>
              </h2>
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
                    <div className={styles.badgeEmoji} style={{ filter: 'grayscale(1) opacity(0.25)' }}>{b.emoji}</div>
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
