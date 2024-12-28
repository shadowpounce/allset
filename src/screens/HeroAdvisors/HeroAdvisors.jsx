import styles from './HeroAdvisors.module.scss'
import { SpeakButton } from '../../components/SpeakButton/SpeakButton'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

export const HeroAdvisors = () => {
  const videoRef = useRef(null)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      setTimeout(() => {
        videoRef.current.play()
      }, 1000)
    }
  }, [videoRef])

  return (
    <section className={styles.heroAdvisors}>
      <div className={styles.left}>
        <img
          data-ease="ease"
          className="reveal"
          data-duration="0.45"
          data-delay="0.75"
          src="assets/images/left.png"
          alt=""
        />
      </div>
      <div className={styles.phone}>
        <img
          src="assets/images/phone.png"
          alt=""
        />
      </div>
      <div className={styles.right}>
        <img
          data-ease="ease"
          className="reveal"
          data-duration="0.45"
          data-delay="1.15"
          src="assets/images/right.png"
          alt=""
        />
      </div>
      <video
        ref={videoRef}
        onLoad={(ev) => {
          setLoad(true)
        }}
        loop
        muted
        playsInline
        src="assets/videos/circle.mp4"
        className={styles.heroAdvisorsVideo}
      ></video>
      <div className="container">
        <div
          className={clsx('section-group centered', styles.heroAdvisorsGroup)}
        >
          <h1 className="split-text reveal opacity">
            Accessible trust funds <span> for your clients</span>
          </h1>
          <p data-delay-kef="0.1" className="txt-18 c-navy07 split-text reveal">
            Offer trust funds as investment vehicles for minors for more of your
            clients
          </p>
          <SpeakButton animated={true} type="secondary" />
        </div>
      </div>
    </section>
  )
}
