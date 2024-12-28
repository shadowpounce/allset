import clsx from 'clsx'
import styles from './Footer.module.scss'
import { Logo } from '../../../ui/Logo/Logo'
import { Button } from '../../../ui/Button/Button'
import { SpeakButton } from '../../../components/SpeakButton/SpeakButton'

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
                <p className="txt-14 split-text">info@joinallset.com</p>
              </a>
            </li>
            <li>
              <p className="txt-14 split-text">All Rights Reserved. ©2024</p>
            </li>
          </ul>
        </div>
        <div
          data-delay="0.2"
          className={clsx(styles.footerBlock, 'reveal translate', styles.light)}
        >
          <p className="txt-14 split-text">For Parents</p>
          <ul>
            <li className="split-text">Home</li>
            <li className="split-text">Calculate</li>
            <li className="split-text">How it Works</li>
            <li className="split-text">Benefits</li>
            <li className="split-text">FAQs</li>
          </ul>
        </div>
        <div
          data-delay="0.4"
          className={clsx(styles.footerBlock, 'reveal translate', styles.dark)}
        >
          <div>
            <p className="txt-14 split-text">For Advisors</p>
            <h4 className="split-text">Offer trust funds for your clients</h4>
          </div>
          <SpeakButton />
        </div>
      </div>
    </footer>
  )
}
