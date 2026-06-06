import { CSSProperties } from 'react'
import { Reveal, SectionHeader } from '@/components/UI'
import { TECH_STACK } from '@/data/content'
import { projectCount } from '@/data/projects'
import styles from './TechStack.module.scss'

export const TechStack = () => {
  return (
    <section id="stack" className={styles.section}>
      <div className="container">
        <SectionHeader
          eyebrow="Технологии"
          title={
            <>
              Один стек — <span className="gradient-text">{projectCount} разных тем</span>
            </>
          }
          subtitle="Все работы построены на одинаковом современном фронтенд-стеке. Меняется только предметная область и палитра — архитектура и качество кода остаются едиными."
        />

        <div className={styles.grid}>
          {TECH_STACK.map((tech, index) => (
            <Reveal key={tech.name} delay={index * 55}>
              <article className={styles.card} style={{ '--tc': tech.color } as CSSProperties}>
                <span className={styles.mono}>{tech.mono}</span>
                <div className={styles.body}>
                  <div className={styles.head}>
                    <h3>{tech.name}</h3>
                    <span className={styles.ver}>{tech.version}</span>
                  </div>
                  <p>{tech.blurb}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
