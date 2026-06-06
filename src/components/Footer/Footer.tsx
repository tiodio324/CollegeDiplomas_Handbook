import { Icon, Reveal } from '@/components/UI'
import { AUTHOR, projectCount } from '@/data/projects'
import styles from './Footer.module.scss'

export const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className={styles.footer}>
      <div className="container">
        <Reveal className={styles.cta}>
          <h2>
            Все <span className="gradient-text">{projectCount} работ</span> — на GitHub
          </h2>
          <p>
            Каждый репозиторий — это рабочее приложение, документация и презентация к защите.
            Заходите, смотрите код и живые сайты.
          </p>
          <a className={styles.btn} href={AUTHOR.github} target="_blank" rel="noreferrer">
            <Icon name="github" size={20} /> Открыть профиль GitHub
          </a>
        </Reveal>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <div className={styles.brand}>
            <span className={styles.brandIcon}>
              <Icon name="cap" size={20} />
            </span>
            <div className={styles.brandText}>
              <strong>{AUTHOR.name}</strong>
              <small>
                {AUTHOR.role} · {AUTHOR.college}
              </small>
            </div>
          </div>

          <p className={styles.meta}>
            © {AUTHOR.graduationYear} · Этот справочник собран на том же стеке, что и {projectCount} ВКР
          </p>

          <button type="button" className={styles.top} onClick={scrollTop} aria-label="Наверх">
            <Icon name="arrowUp" size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}
