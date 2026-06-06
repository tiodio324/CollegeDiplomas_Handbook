import { ReactNode } from 'react'
import { Reveal } from '../Reveal/Reveal'
import styles from './SectionHeader.module.scss'

interface SectionHeaderProps {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'center' | 'left'
}

export const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: SectionHeaderProps) => {
  return (
    <Reveal className={`${styles.header} ${align === 'left' ? styles.left : ''}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </Reveal>
  )
}
