import { Link, useLocation } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { progress, levelProgress } = useProgress()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { to: '/',           label: 'Home' },
    { to: '/courses',    label: 'Courses' },
    { to: '/playground', label: 'Playground' },
    { to: '/profile',    label: 'Profile' },
  ]

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/'
    return location.pathname.startsWith(to)
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <span className={styles.logoIcon}>&lt;/&gt;</span>
          <span className={styles.logoText}>CodeQuest</span>
        </Link>

        <div className={styles.links}>
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`${styles.link} ${isActive(l.to) ? styles.active : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className={styles.right}>
          {/* Streak badge */}
          {progress.streak >= 1 && (
            <div className={styles.streakBadge} title={`${progress.streak}-day streak`}>
              🔥 {progress.streak}
            </div>
          )}

          {/* XP + level */}
          <div className={styles.xpBlock}>
            <span className={styles.level}>Lv.{progress.level}</span>
            <div className={styles.xpBar}>
              <div className={styles.xpFill} style={{ width: `${levelProgress.percent}%` }} />
            </div>
            <span className={styles.xpCount}>{progress.xp} XP</span>
          </div>

          <Link to="/profile" className={styles.avatar} onClick={() => setMenuOpen(false)}>
            {progress.level}
          </Link>

          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        {links.map(l => (
          <Link
            key={l.to}
            to={l.to}
            className={`${styles.mobileLink} ${isActive(l.to) ? styles.mobileLinkActive : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        {progress.streak >= 1 && (
          <div className={styles.mobileStreak}>🔥 {progress.streak}-day streak</div>
        )}
      </div>
    </nav>
  )
}
