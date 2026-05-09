import { Link } from 'react-router-dom'
import { useState } from 'react'
import { courses } from '../data/courses'
import { useProgress } from '../hooks/useProgress'
import styles from './Courses.module.css'

const FILTERS = ['All', 'Beginner', 'Intermediate', 'Advanced']

export default function Courses() {
  const { getCourseProgress } = useProgress()
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = courses.filter(c => {
    const matchFilter = filter === 'All' || c.difficulty.toLowerCase().includes(filter.toLowerCase())
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase())
    return matchFilter && matchSearch
  })

  return (
    <main className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>All Courses</h1>
            <p className={styles.subtitle}>
              {courses.length} courses · Learn at your own pace · Earn XP on every lesson
            </p>
          </div>
          <div className={styles.controls}>
            <input
              type="text"
              className={styles.search}
              placeholder="Search courses..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <div className={styles.filters}>
              {FILTERS.map(f => (
                <button
                  key={f}
                  className={`${styles.filter} ${filter === f ? styles.filterActive : ''}`}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {filtered.map(course => {
            const cp = getCourseProgress(course.id, course.lessons)
            return (
              <Link
                to={`/course/${course.id}`}
                key={course.id}
                className={styles.card}
                style={{ '--c': course.color }}
              >
                <div className={styles.cardTop}>
                  <span className={styles.emoji}>{course.emoji}</span>
                  <div className={styles.badges}>
                    <span className={styles.diffBadge}>{course.difficulty}</span>
                    {cp.done > 0 && cp.percent === 100 && (
                      <span className={styles.doneBadge}>✓ Done</span>
                    )}
                    {cp.done > 0 && cp.percent < 100 && (
                      <span className={styles.inProgressBadge}>In Progress</span>
                    )}
                  </div>
                </div>

                <h2 className={styles.cardTitle}>{course.title}</h2>
                <p className={styles.cardDesc}>{course.description}</p>

                <div className={styles.topics}>
                  {course.topics.slice(0, 4).map(t => (
                    <span key={t} className={styles.topic}>{t}</span>
                  ))}
                  {course.topics.length > 4 && (
                    <span className={styles.topic}>+{course.topics.length - 4} more</span>
                  )}
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.meta}>
                    <span>📚 {course.lessons} lessons</span>
                    <span>🛠️ {course.projects} projects</span>
                    <span className={styles.xp}>⚡ {course.xp} XP</span>
                  </div>
                  {cp.done > 0 ? (
                    <div className={styles.progress}>
                      <div className={styles.progressRow}>
                        <span>{cp.percent}% complete</span>
                        <span>{cp.done}/{cp.total}</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-bar-fill" style={{ width: `${cp.percent}%`, background: course.color }} />
                      </div>
                    </div>
                  ) : (
                    <span className={styles.startBtn}>Start Course →</span>
                  )}
                </div>
              </Link>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <div className={styles.empty}>
            <span>🔍</span>
            <p>No courses match your search.</p>
            <button className="btn btn-outline" onClick={() => { setSearch(''); setFilter('All') }}>Clear filters</button>
          </div>
        )}
      </div>
    </main>
  )
}
