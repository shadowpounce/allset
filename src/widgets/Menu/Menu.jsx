import { useContext, useEffect, useRef } from 'react'
import styles from './Menu.module.scss'
import { MainContext } from '../../app/providers/MainContext'
import clsx from 'clsx'
import { menuItems } from '../../app/layout/Header/Header'

export const Menu = () => {
  const { menuActive, setMenuActive, page } = useContext(MainContext)
  const menuRef = useRef(null)

  useEffect(() => {
    if (menuRef.current) {
      const header = document.querySelector('header')
      const h = header?.offsetHeight

      if (h) {
        menuRef.current.style.top = `${h - 1}px`
      }
    }
  }, [menuRef])

  return (
    <div
      ref={menuRef}
      className={clsx(styles.menu, menuActive && styles.active)}
    >
      <ul className={styles.list}>
        {menuItems.map((item) => (
          <li
            onClick={() => {
              setMenuActive(false)
              ev.preventDefault()
              window.scrollTo({
                left: 0,
                top: document.querySelector(item.href).offsetTop,
                behavior: 'smooth',
              })
            }}
          >
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
      <div className={clsx('switch', 'reveal fromRight')}>
        <a href="/" className={clsx('switch-item', page === '/' && 'active')}>
          For Parents
        </a>
        <a
          href="/for-advisors"
          className={clsx('switch-item', page == '/for-advisors' && 'active')}
        >
          For Advisors
        </a>
      </div>
    </div>
  )
}
