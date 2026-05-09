import { Link, useLocation } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { progress, levelProgress } = useProgress()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { to: '/', label: 'Home' },
    { to: '/courses', label: 'Courses' },
    { to: '/playground', label: 'Playground' },
    { to: '/profile', label: 'Profile' },
  ]

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>&lt;/&gt;</span>
          <span className={styles.logoText}>CodeQuest</span>
        </Link>

        <div className={styles.links}>
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`${styles.link} ${location.pathname === l.to ? styles.active : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className={styles.xpBlock}>
          <div className={styles.xpInfo}>
            <span className={styles.level}>Lv.{progress.level}</span>
            <div className={styles.xpBar}>
              <div className={styles.xpFill} style={{ width: `${levelProgress.percent}%` }} />
            </div>
            <span className={styles.xpCount}>{progress.xp} XP</span>
          </div>
          <Link to="/profile" className={styles.avatar}>
            {progress.level}
          </Link>
        </div>

        <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map(l => (
            <Link key={l.to} to={l.to} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
