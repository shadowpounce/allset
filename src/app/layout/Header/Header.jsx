import clsx from 'clsx'
import { Logo } from '../../../ui/Logo/Logo'
import styles from './Header.module.scss'
import { JoinButton } from '../../../components/JoinButton/JoinButton'

const menuItems = ['home', 'calculate', 'how it works', 'benefits', 'FAQs']

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoGroup}>
        <div className={clsx(styles.headerLogo, 'reveal scale')}>
          <Logo />
        </div>
        <div className={clsx(styles.switch, 'reveal fromRight')}>
          <div className={clsx(styles.switchItem, styles.active)}>
            For Parents
          </div>
          <div className={styles.switchItem}>For Advisors</div>
        </div>
      </div>
      <menu className={styles.menu}>
        {menuItems.map((item, idx) => (
          <a
            data-delay={idx * 0.15}
            className={clsx(styles.menuItem, 'reveal word')}
          >
            {item}
          </a>
        ))}
      </menu>
      <JoinButton />
    </header>
  )
}
