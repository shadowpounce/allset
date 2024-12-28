import clsx from 'clsx'
import styles from './Modal.module.scss'

export const Modal = ({ active, setActive, children }) => {
  return (
    <div className={clsx(styles.modal, active && styles.active)}>
      <div className={styles.modalContent}>
        {children}

        <div className={styles.modalClose} onClick={() => setActive(false)}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1106 19.8896L19.8888 12.1115"
              stroke="#071641"
              stroke-width="2.35714"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.8888 19.8885L12.1106 12.1104"
              stroke="#071641"
              stroke-width="2.35714"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div onClick={() => setActive(false)} className={styles.overlay}></div>
    </div>
  )
}
