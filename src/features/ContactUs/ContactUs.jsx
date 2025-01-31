import { useContext, useEffect, useState } from 'react'
import { Logo } from '../../ui/Logo/Logo'
import styles from './ContactUs.module.scss'
import { MainContext } from '../../app/providers/MainContext'
import { Modal } from '../../widgets/Modal/Modal'
import clsx from 'clsx'
import { Input } from '../../ui/Input/Input'
import { Select } from '../../ui/Select/Select'
import { Button } from '../../ui/Button/Button'
import { statesData } from '../Waitlist/data'
import axios from 'axios'
import { API_URL } from '../../utils/config'
import { SERVER_URL } from '../../utils/config'

const initData = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  firm_name: '',
  firm_site: '',
  aum: '',
  state: '',
  message: '',
}

export const ContactUs = () => {
  const [statusModalActive, setStatusModalActive] = useState(false)

  const [data, setData] = useState(initData)

  const [aum, setAum] = useState('')
  const [states, setStates] = useState('')

  useEffect(() => {
    console.log(data)
  }, [data])

  const { contactUsModalActive, setContactUsModalActive } =
    useContext(MainContext)

  const onSubmit = async () => {
    let formData = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone: data.phone,
      firm_name: data.firm_name,
      firm_site: data.firm_site,
      aum: aum,
      state: states,
      message: data.message,
    }

    console.log(formData)

    try {
      await axios.post(`${API_URL}/send-email`, formData, {
        headers: { 'Content-Type': `application/json` },
        baseURL: SERVER_URL,
      })
      // alert('Email sent')
      setStatusModalActive(true)
      setContactUsModalActive(false)
      setData(initData)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Modal active={contactUsModalActive} setActive={setContactUsModalActive}>
        <div className={styles.contactUs}>
          <div className={clsx('modal-form')}>
            <div className="head">
              <div className={styles.contactUsLogo}>
                <Logo />
              </div>

              <h5>Speak with us</h5>
              <p className="txt-18">
                We look forward to help you with your clients’ needs
              </p>
            </div>
            <div className="inputs">
              <div className="input-group">
                <Input
                  onChange={(ev) =>
                    setData({
                      ...data,
                      first_name: ev.target.value,
                    })
                  }
                  value={data.name}
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
                  value={data.last_name}
                  type="text"
                  placeholder="Last name"
                />
              </div>
              <div className="input-group">
                <Input
                  onChange={(ev) =>
                    setData({
                      ...data,
                      email: ev.target.value,
                    })
                  }
                  value={data.email}
                  type="email"
                  placeholder="Email"
                />
                <Input
                  onChange={(ev) =>
                    setData({
                      ...data,
                      phone: ev.target.value,
                    })
                  }
                  value={data.phone}
                  type="phone"
                  placeholder="Phone number"
                />
              </div>
              <div className="input-group">
                <Input
                  onChange={(ev) =>
                    setData({
                      ...data,
                      firm_name: ev.target.value,
                    })
                  }
                  value={data.firm_name}
                  type="text"
                  placeholder="Firm name"
                />
                <Input
                  onChange={(ev) =>
                    setData({
                      ...data,
                      firm_site: ev.target.value,
                    })
                  }
                  value={data.firm_site}
                  type="text"
                  placeholder="Firm website"
                />
              </div>
              <div className="input-group">
                <Select
                  setValue={setAum}
                  value={aum}
                  initValue="AUM"
                  data={[
                    `Less than $50M`,
                    `$50M to $250M`,
                    `$250M to $1B`,
                    `$1B to $10B`,
                    `More than $10B`,
                  ]}
                />

                <Select
                  value={states}
                  setValue={setStates}
                  initValue="State of residence"
                  data={statesData}
                />
              </div>
              <Input
                onChange={(ev) =>
                  setData({
                    ...data,
                    message: ev.target.value,
                  })
                }
                value={data.message}
                type="message"
                placeholder="How can we help you?"
              />
            </div>
            <div className="bottom">
              <Button
                onClick={onSubmit}
                type="primary"
                icon="assets/icons/add.svg"
                iconBg={true}
              >
                Send message
              </Button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal active={statusModalActive} setActive={setStatusModalActive}>
        <div className={clsx("modal-form", styles.statusModal)}>
          <h5>Your message has been sent successfully. Please wait!</h5>
          <Button onClick={() => setStatusModalActive(false)}>Close</Button>
        </div>
      </Modal>
    </>
  )
}
