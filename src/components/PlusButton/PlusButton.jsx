import styles from './PlusButton.module.scss'

export const PlusButton = () => {
  return (
    <div className={styles.plusBtn}>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        s
        <path
          d="M3.68457 7.5293H10.6846"
          stroke="#1A1A1A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.18457 11.0293V4.0293"
          stroke="#1A1A1A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  )
}
