import { Player } from '@lottiefiles/react-lottie-player'
import { createRef, useEffect, useState, useRef } from 'react'
import styles from './SayHello.module.scss'

export const SayHello = () => {
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
    <section className={styles.say}>
      <div className="container">
        <div className={styles.wrapper}>
          <big data-delay-kef="0.25" className="split-text">
            Say hello <br /> to allset
          </big>
          <p className="txt-24">Secure your child's future</p>
        </div>
        <div className={styles.video}>
          <video
            autoPlay
            playsInline
            muted
            loop
            src="assets/videos/circle.mp4"
            className={styles.circle}
          ></video>
          <Player
            onEvent={(ev) => {
              if (ev === 'load') {
                setLoad(true)
              }
            }}
            keepLastFrame
            lottieRef={(instance) => setLottie(instance)}
            src="assets/videos/phone.json"
          ></Player>
        </div>
      </div>
    </section>
  )
}
