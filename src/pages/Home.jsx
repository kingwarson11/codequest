import { Link } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import { courses, totalStats } from '../data/courses'
import styles from './Home.module.css'

export default function Home() {
  const { progress, getCourseProgress } = useProgress()

  return (
    <main className={styles.home}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.orb1} />
          <div className={styles.orb2} />
          <div className={styles.grid} />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.dot} />
              Interactive Learning Platform
            </div>
            <h1 className={styles.heroTitle}>
              Level Up Your<br />
              <span className={styles.heroAccent}>Coding Skills</span>
            </h1>
            <p className={styles.heroDesc}>
              Learn Python, HTML, CSS, JavaScript, React, Git & GitHub, and Data Structures through interactive lessons, coding challenges, and real projects. Earn XP, unlock badges, and track your progress.
            </p>
            <div className={styles.heroCtas}>
              <Link to="/courses" className="btn btn-primary" style={{ fontSize: '1rem', padding: '14px 28px' }}>
                Start Learning →
              </Link>
              <Link to="/playground" className="btn btn-outline" style={{ fontSize: '1rem', padding: '14px 28px' }}>
                Try Playground
              </Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>{totalStats.courses}</span>
                <span className={styles.statLabel}>Courses</span>
              </div>
              <div className={styles.statDiv} />
              <div className={styles.stat}>
                <span className={styles.statNum}>{totalStats.lessons}+</span>
                <span className={styles.statLabel}>Lessons</span>
              </div>
              <div className={styles.statDiv} />
              <div className={styles.stat}>
                <span className={styles.statNum}>{totalStats.projects}+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.statDiv} />
              <div className={styles.stat}>
                <span className={styles.statNum}>{totalStats.totalXP}</span>
                <span className={styles.statLabel}>Total XP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Choose Your Path</h2>
            <Link to="/courses" className={styles.seeAll}>View all →</Link>
          </div>
          <div className={styles.courseGrid}>
            {courses.map((course, i) => {
              const cp = getCourseProgress(course.id, course.lessons)
              return (
                <Link
                  to={`/course/${course.id}`}
                  key={course.id}
                  className={styles.courseCard}
                  style={{ '--c': course.color, '--delay': `${i * 0.05}s` }}
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.emoji}>{course.emoji}</span>
                    <span className={styles.difficulty}>{course.difficulty}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{course.title}</h3>
                  <p className={styles.cardTagline}>{course.tagline}</p>
                  <div className={styles.cardMeta}>
                    <span>{course.lessons} lessons</span>
                    <span>{course.projects} projects</span>
                    <span className={styles.xpTag}>+{course.xp} XP</span>
                  </div>
                  {cp.done > 0 && (
                    <div className={styles.cardProgress}>
                      <div className={styles.progressRow}>
                        <span>{cp.done}/{cp.total} lessons</span>
                        <span>{cp.percent}%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-bar-fill" style={{ width: `${cp.percent}%`, background: course.color }} />
                      </div>
                    </div>
                  )}
                  <div className={styles.cardArrow}>→</div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.featuresSection}>
        <div className="container">
          <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '48px' }}>
            Why CodeQuest?
          </h2>
          <div className={styles.features}>
            {[
              { icon: '🎮', title: 'Game-Based Learning', desc: 'Earn XP for every lesson completed, level up, and unlock achievements as you progress.' },
              { icon: '💻', title: 'Real Code Editor', desc: 'Write and run code directly in the browser. No setup required — just open and code.' },
              { icon: '🚀', title: 'Project-Based', desc: 'Apply what you learn by building real projects you can add to your portfolio.' },
              { icon: '📊', title: 'Track Progress', desc: 'See exactly how far you\'ve come with detailed progress tracking across all courses.' },
              { icon: '🔥', title: 'Learning Streaks', desc: 'Build consistency with daily learning streaks. Small steps lead to big skills.' },
              { icon: '🏆', title: 'Earn Badges', desc: 'Unlock achievement badges as you hit milestones. Show off your coding journey.' },
            ].map(f => (
              <div key={f.title} className={styles.feature}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2>Ready to start your coding journey?</h2>
            <p>Join thousands of learners leveling up their skills with CodeQuest</p>
            <Link to="/courses" className="btn btn-primary" style={{ fontSize: '1rem', padding: '14px 32px' }}>
              Explore All Courses →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
