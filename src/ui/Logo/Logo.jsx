import styles from './Logo.module.scss'

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src="assets/logo.svg" alt="" />
    </div>
  )
}
