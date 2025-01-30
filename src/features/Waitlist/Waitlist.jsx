import styles from './Waitlist.module.scss'
import { Modal } from '../../widgets/Modal/Modal'
import { Input } from '../../ui/Input/Input'
import { JoinButton } from '../../components/JoinButton/JoinButton'
import { MainContext } from '../../app/providers/MainContext'
import clsx from 'clsx'
import { Player } from '@lottiefiles/react-lottie-player'
import { useEffect, useState, useContext } from 'react'
import { Select } from '../../ui/Select/Select'
import { statesData } from './data'

const WAITLIST_ID = 24605
const WAITLIST_ADVISORS_ID = 24606

function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true
  }
  return false
}

export const Waitlist = () => {
  const { waitlistModalActive, setWaitlistModalActive, page } =
    useContext(MainContext)

  const [lottie, setLottie] = useState(null)
  const [load, setLoad] = useState(false)

  const [states, setStates] = useState('')

  const [data, setData] = useState({
    waitlist_id: WAITLIST_ID,
    referral_link: document.URL,
    email: '',
    first_name: '',
    last_name: '',
  })

  useEffect(() => {
    if (page === '/for-advisors') {
      setData({
        waitlist_id: WAITLIST_ADVISORS_ID,
        referral_link: document.URL,
        email: '',
        first_name: '',
        last_name: '',
      })
    } else {
      setData({
        waitlist_id: WAITLIST_ID,
        referral_link: document.URL,
        email: '',
        first_name: '',
        last_name: '',
      })
    }
  }, [page])

  useEffect(() => {
    console.log(data)
    console.log(page)
  }, [data])

  const submitWaitlist = () => {
    if (!data.email) {
      alert('Please enter your email')
      return
    }

    if (!validateEmail(data.email)) {
      alert('Please enter a valid email')
      return
    }

    fetch('https://api.getwaitlist.com/api/v1/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        alert('You have been added to the waitlist')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    if (load && lottie && waitlistModalActive) {
      lottie.play()
    }
  }, [load, lottie, waitlistModalActive])

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <Modal active={waitlistModalActive} setActive={setWaitlistModalActive}>
      <form
        onSubmit={(ev) => {
          ev.preventDefault()
          submitWaitlist()
        }}
        className={styles.waitlist}
      >
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
            <Input
              onChange={(ev) =>
                setData({
                  ...data,
                  first_name: ev.target.value,
                })
              }
              type="text"
              placeholder="First name"
            />
            <Input
              onChange={(ev) =>
                setData({
                  ...data,
                  last_name: ev.target.value,
                })
              }
              type="text"
              placeholder="Last name"
            />
            <Input
              type="email"
              onChange={(ev) =>
                setData({
                  ...data,
                  email: ev.target.value,
                })
              }
              placeholder="Email"
            />
            <Select
              value={states}
              setValue={setStates}
              initValue="State of residence"
              data={statesData}
            />
          </div>
          <div className="bottom">
            <JoinButton type="submit" animated={false} />
            <p className="txt-14 bottom-row">
              Signed up before?{' '}
              <a className="c-primary bold" href="">
                Check Your Status
              </a>
            </p>
          </div>
        </div>
      </form>
    </Modal>
  )
}
