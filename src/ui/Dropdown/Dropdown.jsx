import { useEffect, useRef, useState } from 'react'
import styles from './Dropdown.module.scss'
import clsx from 'clsx'

export const Dropdown = ({ title, content }) => {
  const [active, setActive] = useState(false)
  const [h, setH] = useState(0)
  const bodyRef = useRef(null)

  useEffect(() => {
    if (bodyRef.current) {
      setH(bodyRef.current.querySelector('p').offsetHeight)
      bodyRef.current.style.height = `0`
    }
  }, [bodyRef, window.innerWidth])

  useEffect(() => {
    if (h) {
      if (active) {
        bodyRef.current.style.height = `${h + 30}px`

        bodyRef.current.classList.add(styles.active)
      } else {
        bodyRef.current.classList.remove(styles.active)

        bodyRef.current.style.height = `0`
      }
    }
  }, [active, h])

  return (
    <div className={clsx(styles.dropdown, 'reveal scale')}>
      <div
        onClick={() => (active ? setActive(false) : setActive(true))}
        className={styles.head}
      >
        <p className={styles.title}>{title}</p>
        <div className={styles.trigger}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12H18"
              stroke="#0D091F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 18V6"
              stroke="#0D091F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div ref={bodyRef} className={styles.body}>
        <p>{content}</p>
      </div>
    </div>
  )
}
