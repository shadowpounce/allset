import clsx from 'clsx'
import { JoinButton } from '../../components/JoinButton/JoinButton'
import { Button } from '../../ui/Button/Button'
import { Pill } from '../../ui/Pill/Pill'
import styles from './Hero.module.scss'
import { Player } from '@lottiefiles/react-lottie-player'
import { createRef, useEffect, useState, useRef } from 'react'

export const Hero = () => {
  const playerRef = useRef(null)

  const [lottie, setLottie] = useState(null)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    if (load && lottie) {
      ScrollTrigger.create({
        trigger: lottie.wrapper,
        start: 'top top+=50%',
        onEnter: () => lottie.play(),
      })
    }
  }, [load, lottie])

  return (
    <section className={styles.hero}>
      <div className={clsx(styles.heroBg, '')}>
        <img src="assets/images/grid.png" alt="" />
      </div>
      <div className="container">
        <div className="section-group centered">
          <h1 className="split-text reveal opacity">
            Invest in your child’s
            <span>first business</span>
          </h1>
          <div className="buttons-wrap">
            <div className="reveal scale">
              <JoinButton />
            </div>
            <div className="reveal scale">
              <Button
                onClick={() =>
                  window.scrollTo({
                    left: 0,
                    top: document.querySelector('#calculate').offsetTop,
                    behavior: 'smooth',
                  })
                }
                type="secondary"
                icon="assets/icons/calculate.svg"
              >
                Calculator
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.heroWrap}>
          <div className={styles.row}>
            <div className={clsx(styles.left, 'reveal scale')}>
              <Button type="square" icon="assets/icons/coin.svg" />
              <p className="txt-18 split-text">
                Secure your child’s financial independence with their very own
                trust fund
              </p>
            </div>
            <div className={styles.video}>
              <Player
                onEvent={(ev) => {
                  if (ev === 'load') {
                    setLoad(true)
                  }
                }}
                keepLastFrame
                lottieRef={(instance) => setLottie(instance)}
                src="assets/videos/hero-card.json"
              ></Player>
            </div>
            <div className={styles.right}>
              <Pill icon="assets/icons/component.svg" title="Customizable" />
              <Pill icon="assets/icons/group.svg" title="Flexible" />
              <Pill icon="assets/icons/trade.svg" title="full control" />
            </div>
          </div>
          <div className={clsx(styles.bottom, 'reveal scale')}>
            <div className={styles.block}>
              <img
                src="assets/icons/smile.svg"
                alt=""
                className={styles.icon}
              />
              <div>
                <p className="txt-16">Keep track of growth</p>
                <p className="txt-14">Start investing today </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
