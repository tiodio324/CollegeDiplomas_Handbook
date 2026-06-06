import { Icon, Reveal, SectionHeader } from '@/components/UI'
import { ARCH_POINTS } from '@/data/content'
import { projectCount } from '@/data/projects'
import styles from './Architecture.module.scss'

const ENV_SNIPPET = `# Один стек — разная конфигурация на проект
VITE_PROJECT_PATH=13-class-schedule-nikita

# Firebase Realtime Database
# проект "college-diplomas" — общий для всех ВКР
#   ├─ 1-personal-finance-kirill
#   ├─ 2-crm-system-elizaveta
#   ├─ 3-car-rental-p2p-damir
#   ├─ …
#   └─ 19-crowdsourcing-platform`

export const Architecture = () => {
  return (
    <section id="architecture" className={styles.section}>
      <div className="container">
        <SectionHeader
          eyebrow="Инженерия"
          title={
            <>
              Единая <span className="gradient-text">инженерная база</span>
            </>
          }
          subtitle={`Почему ${projectCount} проектов выглядят по-разному, но поддерживаются как один: общие архитектурные решения под капотом.`}
        />

        <div className={styles.layout}>
          <div className={styles.points}>
            {ARCH_POINTS.map((point, index) => (
              <Reveal key={point.title} delay={index * 45}>
                <article className={styles.point}>
                  <span className={styles.icon}>
                    <Icon name={point.icon} size={20} />
                  </span>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className={styles.codeWrap} y={40}>
            <div className={styles.code}>
              <div className={styles.codeBar}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
                <em>.env · конфигурация проекта</em>
              </div>
              <pre>
                <code>{ENV_SNIPPET}</code>
              </pre>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
