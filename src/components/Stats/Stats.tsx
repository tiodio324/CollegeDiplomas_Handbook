import { Icon } from '@/components/UI'
import { useCountUp, useInView } from '@/hooks'
import { STATS } from '@/data/content'
import { Stat } from '@/data/content'
import styles from './Stats.module.scss'

const StatCard = ({ stat, start }: { stat: Stat; start: boolean }) => {
  const value = useCountUp(stat.value, { start })
  return (
    <div className={styles.card}>
      <span className={styles.icon}>
        <Icon name={stat.icon} size={22} />
      </span>
      <div className={styles.value}>
        {value}
        {stat.suffix ?? ''}
      </div>
      <div className={styles.label}>{stat.label}</div>
    </div>
  )
}

export const Stats = () => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.25 })

  return (
    <section id="stats" className={styles.stats}>
      <div className="container">
        <div className={styles.grid} ref={ref}>
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} start={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
