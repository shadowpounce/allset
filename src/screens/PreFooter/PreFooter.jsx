import clsx from 'clsx'
import { JoinButton } from '../../components/JoinButton/JoinButton'
import { Button } from '../../ui/Button/Button'
import { Pill } from '../../ui/Pill/Pill'
import styles from './PreFooter.module.scss'
import { Chart } from '../../svg/Chart/Chart'
import { Player } from '@lottiefiles/react-lottie-player'
import { createRef, useEffect, useState, useRef, useContext } from 'react'
import { MainContext } from '../../app/providers/MainContext'

export const PreFooter = () => {
  const { setContactUsModalActive } = useContext(MainContext)

  const playerRef = useRef(null)

  const [lottie, setLottie] = useState(null)
  const [lottieTwo, setLottieTwo] = useState(null)
  const [load, setLoad] = useState(false)
  const [loadTwo, setLoadTwo] = useState(false)

  useEffect(() => {
    if (load && lottie) {
      ScrollTrigger.create({
        trigger: lottie.wrapper,
        start: 'top top+=50%',
        onEnter: () => lottie.play(),
      })
    }
  }, [load, lottie])

  useEffect(() => {
    if (loadTwo && lottieTwo) {
      ScrollTrigger.create({
        trigger: lottie.wrapper,
        start: 'top top+=50%',
        onEnter: () => lottieTwo.play(),
      })
    }
  }, [loadTwo, lottieTwo])

  return (
    <section className={styles.preFooter}>
      <div className={styles.preFooterRow}>
        <div className={styles.pfCard}>
          <div
            id="pc1"
            data-delay="0.15"
            className={clsx(styles.card, 'reveal scale', styles.txtBottom)}
          >
            <div
              className="investing-number secondary reveal scale"
              data-delay="0.65"
            >
              <Pill icon="assets/icons/smile.svg" />
              <div className="content">
                <p>Keep track of growth </p>
                <span>Start investing today</span>
              </div>
            </div>
            <div data-delay="0.95" className="reveal scale">
              <Pill icon="assets/icons/flash-2.svg" title="Invest" />
            </div>
            <div className={styles.text}>
              <p className="txt-14">Investments Grow </p>
              <p className="txt-24">Flexibility for Life’s Events</p>
            </div>
          </div>
        </div>
        <div className={styles.pfCard}>
          <div
            id="pc2"
            data-delay="0.35"
            className={clsx(styles.card, 'reveal scale', styles.justPhoto)}
          >
            <img src="assets/images/pfc1.png" alt="" />
          </div>
        </div>
        <div className={styles.pfCard}>
          <div
            id="pc3"
            data-delay="0.55"
            className={clsx(styles.card, 'reveal scale', styles.txtBottom)}
          >
            <div className="reveal scale" data-delay="1.25" data-duration="3">
              <Chart />
            </div>
            <div className={styles.text}>
              <p className="txt-14">Investments Grow </p>
              <p className="txt-24">Power of Compounding</p>
            </div>
          </div>
        </div>
        <div className={styles.pfCard}>
          <div
            id="pc4"
            data-delay="0.75"
            className={clsx(styles.card, 'reveal scale', styles.justPhoto)}
          >
            <img src="assets/images/pfc2.png" alt="" />
          </div>
        </div>
        <div className={styles.pfCard}>
          <div
            id="pc5"
            data-delay="0.95"
            className={clsx(styles.card, 'reveal scale', styles.txtBottom)}
          >
            <Player
              id="lottie1"
              onEvent={(ev) => {
                if (ev === 'load') {
                  setLoad(true)
                }
              }}
              keepLastFrame
              lottieRef={(instance) => setLottie(instance)}
              src="assets/videos/pf2.json"
            ></Player>
            <div className={styles.text}>
              <p className="txt-14">Your Rules</p>
              <p className="txt-24">Full Control of Distributons</p>
            </div>
          </div>
        </div>

        <div className={styles.pfCard}>
          <div
            id="pc6"
            data-delay="1.15"
            className={clsx(styles.card, 'reveal scale', styles.justPhoto)}
          >
            <img src="assets/images/pfc3.png" alt="" />
          </div>
        </div>
        <div className={styles.pfCard}>
          <div
            id="pc7"
            data-delay="1.35"
            className={clsx(styles.card, 'reveal scale')}
          >
            <Player
              id="lottie1"
              onEvent={(ev) => {
                if (ev === 'load') {
                  setLoadTwo(true)
                }
              }}
              keepLastFrame
              lottieRef={(instance) => setLottieTwo(instance)}
              src="assets/videos/pf1.json"
            ></Player>
            <div className={styles.text}>
              <p className="txt-14">Customizable</p>
              <p className="txt-24">Flexibility for Life’s Events</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section-group centered">
          <h2 className="split-text">
            Give your child financial independence and <br />
            set them up for life
          </h2>
          <div className="buttons-wrap">
            <JoinButton />
            <Button
              onClick={() => setContactUsModalActive(true)}
              className="reveal scale"
              icon="assets/icons/sms.svg"
              type="secondary"
            >
              {
                <div className={styles.btnSpeak}>
                  <p className="txt-12">For Advisors</p>
                  <p
                    style={{ color: '#1A1A1A !important', fontWeight: 600 }}
                    className="txt-16"
                  >
                    Speak with us
                  </p>
                </div>
              }
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
