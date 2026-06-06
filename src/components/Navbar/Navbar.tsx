import { useEffect, useRef, useState } from 'react'
import { Icon } from '@/components/UI'
import { useTheme } from '@/hooks'
import { AUTHOR } from '@/data/projects'
import styles from './Navbar.module.scss'

const NAV = [
  { href: '#projects', label: 'Работы' },
  { href: '#stack', label: 'Стек' },
  { href: '#inside', label: 'Что внутри' },
  { href: '#architecture', label: 'Инженерия' },
]

export const Navbar = () => {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const doc = document.documentElement
        const max = doc.scrollHeight - doc.clientHeight
        const ratio = max > 0 ? doc.scrollTop / max : 0
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${ratio})`
        }
        setScrolled(doc.scrollTop > 12)
        ticking = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.progress} ref={progressRef} />
      <div className={`${styles.inner} container`}>
        <a className={styles.brand} href="#top" aria-label="В начало">
          <span className={styles.brandIcon}>
            <Icon name="cap" size={22} />
          </span>
          <span className={styles.brandText}>
            <strong>{AUTHOR.name}</strong>
            <small>ВКР · {AUTHOR.college}</small>
          </span>
        </a>

        <nav className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {NAV.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className={styles.menuGithub}
            href={AUTHOR.github}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            <Icon name="github" size={18} /> GitHub
          </a>
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.iconBtn}
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={20} />
          </button>
          <a className={styles.ghBtn} href={AUTHOR.github} target="_blank" rel="noreferrer">
            <Icon name="github" size={18} />
            <span>GitHub</span>
          </a>
          <button
            type="button"
            className={`${styles.iconBtn} ${styles.burger}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Меню"
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? 'close' : 'layers'} size={22} />
          </button>
        </div>
      </div>
      {menuOpen && <div className={styles.scrim} onClick={() => setMenuOpen(false)} />}
    </header>
  )
}
