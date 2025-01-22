import { Player } from '@lottiefiles/react-lottie-player'
import { createRef, useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import styles from './SayHello.module.scss'

export const SayHello = () => {
  const videoRef = useRef(null)
  const videoWrRef = useRef(null)

  useEffect(() => {
    if (videoRef.current && videoWrRef.current) {
      const video = document.getElementById('circles')
      const endFirstCycle = 8 // Первая точка завершения видео
      const loopStart = 4 // Секунда, с которой начинается повтор
      const loopEnd = 8 // Секунда, на которой заканчивается повтор

      let isInitialPlay = true // Флаг для отслеживания первого воспроизведения

      video.addEventListener('timeupdate', () => {
        if (isInitialPlay && video.currentTime >= endFirstCycle) {
          video.currentTime = loopStart
          isInitialPlay = false
        } else if (!isInitialPlay && video.currentTime >= loopEnd) {
          video.currentTime = loopStart
        }
      })

      video.addEventListener('ended', () => {
        // Если нужно перезапустить видео в случае, если проигрыватель завершил цикл
        if (!isInitialPlay) {
          video.currentTime = loopStart
          video.play()
        }
      })

      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: videoWrRef.current,
          start: 'top top+=50%',
          onEnter: () => videoRef.current.play(),
        })
      })
    }
  }, [videoRef, videoWrRef])
  // const [lottie, setLottie] = useState(null)
  // const [load, setLoad] = useState(false)

  // useEffect(() => {
  //   if (load && lottie) {
  //     const ctx = gsap.context(() => {
  //       ScrollTrigger.create({
  //         trigger: lottie.wrapper,
  //         start: 'top top+=50%',
  //         onEnter: () => lottie.play(),
  //       })
  //     })

  //     return () => ctx.destroy()
  //   }
  // }, [load, lottie])

  return (
    <section className={styles.say}>
      <div className="container">
        <div className={styles.wrapper}>
          <big data-delay-kef="0.25" className="split-text">
            Say hello <br /> to allset
          </big>
          <p className="txt-24">Secure your child's future</p>
        </div>
        <div ref={videoWrRef} className={styles.video}>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            src="assets/videos/phonecircle.mp4"
            className={styles.circle}
            id="circles"
          ></video>

          {/* <Player
            onEvent={(ev) => {
              if (ev === 'load') {
                setLoad(true)
              }
            }}
            keepLastFrame
            lottieRef={(instance) => setLottie(instance)}
            src="assets/videos/phone.json"
          ></Player> */}
        </div>
      </div>
    </section>
  )
}
