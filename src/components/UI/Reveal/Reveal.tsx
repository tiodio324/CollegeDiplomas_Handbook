import { CSSProperties, ReactNode } from 'react'
import { useInView } from '@/hooks'
import styles from './Reveal.module.scss'

interface RevealProps {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}

export const Reveal = ({ children, delay = 0, y, className = '' }: RevealProps) => {
  const { ref, inView } = useInView<HTMLDivElement>()

  const style = {
    transitionDelay: `${delay}ms`,
    '--reveal-y': y !== undefined ? `${y}px` : undefined,
  } as CSSProperties

  return (
    <div
      ref={ref}
      style={style}
      className={`${styles.reveal} ${inView ? styles.visible : ''} ${className}`.trim()}
    >
      {children}
    </div>
  )
}
