import React, { useEffect, useState } from 'react'

import styles from './Select.module.scss'
import clsx from 'clsx'

export const Select = ({ data, initValue, value, setValue }) => {
  const [active, setActive] = useState(false)
  const [activeItem, setActiveItem] = useState(data[0])

  // useEffect(() => {
  //   if (initValue) {
  //     setValue(initValue)
  //   }
  // }, [initValue])

  return (
    <div onClick={() => {
      active ? setActive(false) : setActive(true)
    }} className={clsx(styles.select, active && styles.active)}>
      <div
        
        className={styles.head}
      >
        <input type="text" placeholder={!value ? initValue : value} />
        <div className={styles.arrow}>
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.2797 6.26538L8.93306 10.612C8.41973 11.1254 7.57973 11.1254 7.06639 10.612L2.71973 6.26538"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className={styles.dropdown}>
        <div className={styles.list}>
          {data &&
            data.map((item) => (
              <div
                onClick={() => {
                  setActiveItem(item)
                  setValue(item)
                  setActive(false)
                }}
                className={styles.item}
                // onClick={() => setActive(item)}
                key={item}
              >
                {item}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
