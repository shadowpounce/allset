import clsx from 'clsx'
import { Logo } from '../../../ui/Logo/Logo'
import styles from './Header.module.scss'
import { JoinButton } from '../../../components/JoinButton/JoinButton'
import { SpeakButton } from '../../../components/SpeakButton/SpeakButton'
import { Button } from '../../../ui/Button/Button'
import { useContext } from 'react'
import { MainContext } from '../../providers/MainContext'
import { useLocation } from 'react-router-dom'

export const menuItems = [
  {
    name: 'home',
    href: '#home',
  },
  {
    name: 'calculate',
    href: '#calculate',
  },
  {
    name: 'how it works',
    href: '#how-it-works',
  },
  {
    name: 'benefits',
    href: '#benefits',
  },
  {
    name: 'FAQs',
    href: '#faq',
  },
]

export const Header = () => {
  const { menuActive, setMenuActive } = useContext(MainContext)
  const { pathname } = useLocation()

  return (
    <header className={clsx(styles.header, menuActive && styles.active)}>
      <div className={styles.logoGroup}>
        <a href="/" className={clsx(styles.headerLogo, 'reveal scale')}>
          <Logo />
        </a>
        <div className={clsx('switch', 'reveal fromRight')}>
          <a
            href="/"
            className={clsx('switch-item', pathname === '/' && 'active')}
          >
            For Parents
          </a>
          <a
            href="/for-advisors"
            className={clsx(
              'switch-item',
              pathname == '/for-advisors' && 'active'
            )}
          >
            For Advisors
          </a>
        </div>
      </div>
      {pathname === '/' && (
        <menu className={styles.menu}>
          {menuItems.map((item, idx) => (
            <a
              onClick={(ev) => {
                ev.preventDefault()
                window.scrollTo({
                  left: 0,
                  top: document.querySelector(item.href).offsetTop,
                  behavior: 'smooth',
                })
              }}
              data-delay={idx * 0.15}
              href={item.href}
              className={clsx(styles.menuItem, 'reveal word')}
            >
              {item.name}
            </a>
          ))}
        </menu>
      )}
      {window.innerWidth >= 561 ? (
        <>
          {pathname === '/' ? (
            <JoinButton />
          ) : (
            <SpeakButton type="primarySex" />
          )}
        </>
      ) : (
        <div className={styles.headerMobileGroup}>
          <>
            {pathname === '/' ? (
              <JoinButton />
            ) : (
              <SpeakButton type="primarySex" />
            )}
          </>
          <div
            onClick={() =>
              menuActive ? setMenuActive(false) : setMenuActive(true)
            }
            className={clsx(
              styles.burger,
              menuActive && styles.active,
              'reveal scale'
            )}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 5L20 5"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 12L20 12"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 19L20 19"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
    </header>
  )
}
