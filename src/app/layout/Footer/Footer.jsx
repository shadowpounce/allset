import clsx from 'clsx'
import styles from './Footer.module.scss'
import { Logo } from '../../../ui/Logo/Logo'
import { Button } from '../../../ui/Button/Button'
import { SpeakButton } from '../../../components/SpeakButton/SpeakButton'
import { menuItems } from '../Header/Header'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={clsx('container', styles.footerContainer)}>
        <div
          className={clsx(styles.footerBlock, 'reveal translate', styles.main)}
        >
          <div className={styles.footerLogo}>
            <Logo />
          </div>
          <p className="txt-18 split-text">
            Secure your child’s financial independence with their very own trust
            fund
          </p>
          <ul className={styles.bottom}>
            <li>
              <a type="email" href="info@joinallset.com">
                <p data-start="top top+=95%" className="txt-14 split-text">
                  info@joinallset.com
                </p>
              </a>
            </li>
            <li>
              <p data-start="top top+=95%" className="txt-14 split-text">
                All Rights Reserved. ©2024
              </p>
            </li>
          </ul>
        </div>
        <div
          data-delay="0.2"
          className={clsx(styles.footerBlock, 'reveal translate', styles.light)}
        >
          <p className={clsx('txt-14 split-text', styles.for)}>
            <a href="/">For Parents</a>
          </p>
          <ul>
            {menuItems.map((item) => (
              <li
                className="split-text"
                onClick={(ev) => {
                  ev.preventDefault()
                  window.scrollTo({
                    left: 0,
                    top: document.querySelector(item.href).offsetTop,
                    behavior: 'smooth',
                  })
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div
          data-delay="0.4"
          className={clsx(styles.footerBlock, 'reveal translate', styles.dark)}
        >
          <div>
            <p className={clsx('txt-14 split-text', styles.for)}>
              <a href="/for-advisors">For Advisors</a>
            </p>
            <h4 className="split-text">Offer trust funds for your clients</h4>
          </div>
          <SpeakButton />
        </div>
      </div>
    </footer>
  )
}
