import styles from './Waitlist.module.scss'
import { Modal } from '../../widgets/Modal/Modal'
import { Input } from '../../ui/Input/Input'
import { JoinButton } from '../../components/JoinButton/JoinButton'
import { useContext } from 'react'
import { MainContext } from '../../app/providers/MainContext'
import clsx from 'clsx'
import { Player } from '@lottiefiles/react-lottie-player'
import { useEffect, useState } from 'react'

export const Waitlist = () => {
  const { waitlistModalActive, setWaitlistModalActive } =
    useContext(MainContext)

  const [lottie, setLottie] = useState(null)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    if (load && lottie && waitlistModalActive) {
      lottie.play()
    }
  }, [load, lottie, waitlistModalActive])

  return (
    <Modal active={waitlistModalActive} setActive={setWaitlistModalActive}>
      <div className={styles.waitlist}>
        <div className={styles.video}>
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
          <video
            src="assets/videos/circle.mp4"
            loop
            playsInline
            muted
            autoPlay
            className={styles.circle}
          ></video>
          <span>allset</span>
          <p>Give your child financial independence and set them up for life</p>
        </div>
        <div className={clsx('modal-form', styles.waitlistForm)}>
          <div className="head">
            <h5>Join waitlist</h5>
            <p className="txt-18">
              Enter your details to join Allset's waitlist
            </p>
          </div>
          <div className="inputs">
            <Input type="text" placeholder="First name" />
            <Input type="text" placeholder="Last name" />
            <Input type="email" placeholder="Email" />
            <Input type="text" placeholder="State of residence" />
          </div>
          <div className="bottom">
            <JoinButton animated={false} />
            <p className="txt-14 bottom-row">
              Signed up before?{' '}
              <a className="c-primary bold" href="">
                Check Your Status
              </a>
            </p>
          </div>
        </div>
      </div>
    </Modal>
  )
}
