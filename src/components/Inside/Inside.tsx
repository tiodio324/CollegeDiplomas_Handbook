import { Icon, Reveal, SectionHeader } from '@/components/UI'
import { DELIVERABLES } from '@/data/content'
import styles from './Inside.module.scss'

export const Inside = () => {
  return (
    <section id="inside" className={styles.section}>
      <div className="container">
        <SectionHeader
          eyebrow="Комплектность"
          title={
            <>
              Что входит в <span className="gradient-text">каждую ВКР</span>
            </>
          }
          subtitle="Это не просто сайт. Каждая работа — полный комплект для защиты: исходный код, документы, презентация и развёрнутое приложение."
        />

        <div className={styles.grid}>
          {DELIVERABLES.map((item, index) => (
            <Reveal key={item.title} delay={index * 50}>
              <article className={styles.card}>
                <span className={styles.icon}>
                  <Icon name={item.icon} size={22} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.note}>
          <span className={styles.noteIcon}>
            <Icon name="bolt" size={18} />
          </span>
          <p>
            Полный комплект — презентация, word-документ, <code>OVERVIEW.md</code> и{' '}
            <code>CREDENTIALS.md</code> — лежит в GitHub-репозитории, а само приложение развёрнуто
            на хостинге и открывается по ссылке.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
