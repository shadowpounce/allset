import clsx from 'clsx'
import styles from './Pill.module.scss'

export const Pill = ({ title, type = 'primary', icon }) => {
  return (
    <>
      {type === 'primary' ? (
        <div className={clsx(styles.pill, 'reveal scale')}>
          <img src={icon} alt="" className={styles.icon} />
          {title && <p className="txt-12">{title}</p>}
        </div>
      ) : (
        <div className={clsx(styles.pill, styles.secondary, 'reveal scale')}>
          <img src={icon} alt="" className={styles.icon} />
          {title && <p className="txt-14">{title}</p>}
        </div>
      )}
    </>
  )
}
