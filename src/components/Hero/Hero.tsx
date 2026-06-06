import { CSSProperties } from 'react'
import { Icon } from '@/components/UI'
import { AUTHOR, projects, projectCount } from '@/data/projects'
import styles from './Hero.module.scss'

export const Hero = () => {
  return (
    <section id="top" className={styles.hero}>
      <div className={`${styles.inner} container`}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>
            <Icon name="sparkles" size={15} />
            {AUTHOR.college} · ВКР {AUTHOR.graduationYear}
          </span>

          <h1 className={styles.title}>
            <span className={styles.count}>{projectCount}</span> дипломных работ.
            <br />
            <span className="gradient-text">Один разработчик.</span>
          </h1>

          <p className={styles.lead}>
            Я выполнил под ключ {projectCount} выпускных квалификационных работ
            для своей группы — это {projectCount} живых веб-приложений на едином стеке
            React, TypeScript, MobX и Firebase. Разные темы и палитры, общая инженерная база.
          </p>

          <div className={styles.cta}>
            <a className={styles.primary} href="#projects">
              Смотреть работы <Icon name="arrowRight" size={18} />
            </a>
            <a className={styles.secondary} href={AUTHOR.github} target="_blank" rel="noreferrer">
              <Icon name="github" size={18} /> Исходники на GitHub
            </a>
          </div>

          <ul className={styles.badges}>
            <li>
              <strong>{projectCount}</strong>
              <span>живых сайтов</span>
            </li>
            <li>
              <strong>1</strong>
              <span>общая база Firebase</span>
            </li>
            <li>
              <strong>55%</strong>
              <span>конверсия заказов</span>
            </li>
          </ul>
        </div>

        <div className={styles.showcase}>
          <div className={styles.mosaic} aria-hidden="true">
            {projects.map((project, index) => (
              <a
                key={project.id}
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className={styles.tile}
                style={
                  {
                    '--c': project.color,
                    '--a': project.accent,
                    animationDelay: `${index * 65}ms`,
                  } as CSSProperties
                }
                title={`${project.title} · для ${project.student}`}
              >
                <span className={styles.tileEmoji}>{project.emoji}</span>
                <span className={styles.tileNum}>{String(project.id).padStart(2, '0')}</span>
              </a>
            ))}
          </div>
          <div className={styles.caption}>
            <span className={styles.dot} /> {projectCount} проектов · единый стек · 6 направлений
          </div>
        </div>
      </div>

      <a className={styles.scrollHint} href="#stats" aria-label="Листать вниз">
        <Icon name="chevronDown" size={22} />
      </a>
    </section>
  )
}
