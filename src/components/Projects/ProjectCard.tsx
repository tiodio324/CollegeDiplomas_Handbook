import { CSSProperties } from 'react'
import { Icon } from '@/components/UI'
import { Project } from '@/data/projects'
import styles from './ProjectCard.module.scss'

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
}

export const ProjectCard = ({ project, onOpen }: ProjectCardProps) => {
  return (
    <article
      className={styles.card}
      style={{ '--c': project.color, '--a': project.accent } as CSSProperties}
    >
      <div className={styles.banner}>
        <span className={styles.bigNum}>{String(project.id).padStart(2, '0')}</span>
        <span className={styles.emoji}>{project.emoji}</span>
        <span className={styles.cat}>{project.category}</span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.student}>
          <Icon name="users" size={13} /> для студента · {project.student}
        </p>
        <p className={styles.desc}>{project.description}</p>
        <span className={styles.theme}>
          <Icon name="palette" size={13} /> {project.themeName}
        </span>
      </div>

      <div className={styles.footer}>
        <a className={styles.live} href={project.live} target="_blank" rel="noreferrer">
          <Icon name="globe" size={16} /> Сайт
        </a>
        <a
          className={styles.code}
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`GitHub репозиторий: ${project.title}`}
        >
          <Icon name="github" size={16} />
        </a>
        <button className={styles.more} type="button" onClick={() => onOpen(project)}>
          Подробнее <Icon name="arrowRight" size={15} />
        </button>
      </div>
    </article>
  )
}
