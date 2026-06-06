import { useEffect, CSSProperties } from 'react'
import { createPortal } from 'react-dom'
import { Icon } from '@/components/UI'
import { Project } from '@/data/projects'
import styles from './ProjectModal.module.scss'

const REPO_CONTENTS = [
  'Документ к защите',
  'Презентация к защите',
  'OVERVIEW.md — инструкции по доработке и описание проекта',
  'README с инструкцией',
  'CREDENTIALS.md — доступы',
  'Исходный код',
]

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (!project) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return createPortal(
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        style={{ '--c': project.color, '--a': project.accent } as CSSProperties}
        onClick={(event) => event.stopPropagation()}
      >
        <button className={styles.close} type="button" onClick={onClose} aria-label="Закрыть">
          <Icon name="close" size={20} />
        </button>

        <div className={styles.header}>
          <span className={styles.num}>ВКР №{project.id}</span>
          <span className={styles.emoji}>{project.emoji}</span>
          <h3>{project.title}</h3>
          <p className={styles.thesis}>«{project.thesis}»</p>
        </div>

        <div className={styles.content}>
          <p className={styles.desc}>{project.description}</p>

          <div className={styles.metaGrid}>
            <div>
              <span>Студент</span>
              <strong>{project.student}</strong>
            </div>
            <div>
              <span>Направление</span>
              <strong>{project.category}</strong>
            </div>
            <div>
              <span>Тема оформления</span>
              <strong>{project.themeName}</strong>
            </div>
            <div>
              <span>Узел в Firebase</span>
              <strong className={styles.mono}>{project.firebaseNode}</strong>
            </div>
          </div>

          <div className={styles.columns}>
            <div>
              <h4>Ключевые возможности</h4>
              <ul className={styles.list}>
                {project.highlights.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={16} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Что в репозитории</h4>
              <ul className={styles.list}>
                {REPO_CONTENTS.map((item) => (
                  <li key={item}>
                    <Icon name="folder" size={15} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <a className={styles.primary} href={project.live} target="_blank" rel="noreferrer">
            <Icon name="globe" size={18} /> Открыть сайт
          </a>
          <a className={styles.secondary} href={project.github} target="_blank" rel="noreferrer">
            <Icon name="github" size={18} /> Открыть GitHub
          </a>
        </div>
      </div>
    </div>,
    document.body,
  )
}
