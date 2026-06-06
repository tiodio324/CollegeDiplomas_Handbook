import styles from './Background.module.scss'

export const Background = () => {
  return (
    <div className={styles.bg} aria-hidden="true">
      <div className={styles.grid} />
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
      <div className={`${styles.blob} ${styles.blob3}`} />
      <div className={styles.vignette} />
    </div>
  )
}
