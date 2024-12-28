import clsx from 'clsx'
import styles from './Benefits.module.scss'
import { Pill } from '../../ui/Pill/Pill'
import { Chart } from '../../svg/Chart/Chart'
import { PlusButton } from '../../components/PlusButton/PlusButton'
import { Bubble } from './Bubble'
import { BubbleTwo } from './BubbleTwo'
import { useEffect, useRef, useState } from 'react'

export const Benefits = () => {
  const videoRef = useRef(null)
  const [played, setPlayed] = useState(false)

  useEffect(() => {
    if (videoRef.current && !played) {
      ScrollTrigger.create({
        trigger: videoRef.current,
        start: 'top top+=50%',
        onEnter: () => videoRef.current.play(),
      })
      setPlayed(true)
    }
  }, [videoRef])

  return (
    <section className={styles.benefits}>
      <div className={clsx('container', styles.benefitsContainer)}>
        <h2 className={clsx(styles.benefitsTitle, 'split-text')}>
          Create your fund and start <br /> investing{' '}
          <span className="reveal scale">
            <img src="assets/icons/activity.svg" alt="" />
          </span>
          to secure your child’s <br /> future, all from one easy app. <br />{' '}
          You decide when and how <br /> they can use their funds.
        </h2>
        <div className={styles.benefitsCards}>
          <div className={clsx(styles.benefitsCard, styles.big)}>
            <Pill
              icon="assets/icons/document-text.svg"
              title="You make the rules"
            />
            <div
              id="bubble-1"
              data-duration="3"
              data-delay="0.55"
              className={clsx(styles.bubble, 'reveal')}
            >
              <Bubble />
            </div>
            <div
              id="bubble-2"
              data-duration="3"
              data-delay="1.35"
              className={clsx(styles.bubble, 'reveal')}
            >
              <BubbleTwo />
            </div>
            <div className={styles.text}>
              <h3 className="split-text">Set up a trust fund in minutes</h3>
              <p className="txt-16 split-text">
                Our Al makes setting up a trust fund for your child easy. Think
                of it as a purpose-built vehicle for simplicity and security.
                You make the rules - how and when your child can use the assets.
              </p>
            </div>
          </div>
          <div className={styles.benefitsCard}>
            <Pill title="Invest for your child" icon="assets/icons/coin.svg" />
            <div id="acard-1" className={clsx(styles.animatedCard)}>
              <div className="monitor-and-manage reveal scale">
                <div className="head">
                  <p className="txt-20">
                    Monitor <br /> and Manage
                  </p>
                  <PlusButton />
                </div>
                <div className="body">
                  <Chart />
                </div>
              </div>
            </div>
            <div id="acard-2" className={clsx(styles.animatedCard)}>
              <div className="secure-ind reveal scale">
                <Pill icon="assets/icons/coin.svg" />
                <p className="split-text">
                  Secure your child’s financial independence with their very own
                  trust fund
                </p>
              </div>
            </div>
            <div id="acard-3" className={clsx(styles.animatedCard)}>
              <div className="just-family reveal scale">
                <img src="assets/images/just-family.png" alt="" />
              </div>
            </div>
            <div id="acard-4" className={clsx(styles.animatedCard)}>
              <div className="investing-numbers reveal scale">
                <div
                  data-duration="3"
                  data-delay="0.25"
                  className="investing-number reveal scale"
                >
                  <div className="tag">
                    <img src="assets/icons/teacher.svg" alt="" />
                    <span>Expected College</span>
                  </div>
                  <div className="content">
                    <span>Fund Balance at 18</span>
                    <p className="txt-14">
                      $
                      <b className="counter" data-end="201">
                        0
                      </b>
                      ,
                      <b className="counter" data-end="928">
                        0
                      </b>
                    </p>
                  </div>
                </div>
                <div
                  data-duration="3"
                  data-delay="0.55"
                  className="investing-number reveal scale"
                >
                  <div className="tag">
                    <img src="assets/icons/house.svg" alt="" />
                    <span>Expected House</span>
                  </div>
                  <div className="content">
                    <span>Fund Balance at 30</span>
                    <p className="txt-14">
                      $
                      <b className="counter" data-end="375">
                        0
                      </b>
                      ,
                      <b className="counter" data-end="902">
                        0
                      </b>
                    </p>
                  </div>
                </div>
                <div
                  data-duration="3"
                  data-delay="0.95"
                  className="investing-number reveal scale secondary"
                >
                  <Pill icon="assets/icons/smile-white.svg" />
                  <div className="content">
                    <p className="split-text">Keep track of growth </p>
                    <span>Start investing today</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.text}>
              <h5 className="split-text">Easy, automated investing</h5>
              <p className="txt-16 split-text">
                Give your money a chance to work toward your child's future. Our
                Al-powered platform will provide personalized expert - built,
                diversified portfolios, optimized to your family's goals.
              </p>
            </div>
          </div>
          <div className={styles.benefitsCard}>
            <Pill
              title="Boost your child’s future"
              icon="assets/icons/flash.svg"
            />
            <video
              ref={videoRef}
              playsInline
              muted
              className={styles.video}
              src="assets/videos/village.mp4"
            ></video>
            <div className={styles.text}>
              <h5 className="split-text">Grow the village around your child</h5>
              <p className="txt-16 split-text">
                Invite friends and family to join your team and contribute to
                your child's trust fund for their birthday, holidays, special
                occasions, and more. It takes a village to raise a child.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
