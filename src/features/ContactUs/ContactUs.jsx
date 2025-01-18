import { useContext } from 'react'
import { Logo } from '../../ui/Logo/Logo'
import styles from './ContactUs.module.scss'
import { MainContext } from '../../app/providers/MainContext'
import { Modal } from '../../widgets/Modal/Modal'
import clsx from 'clsx'
import { Input } from '../../ui/Input/Input'
import { Select } from '../../ui/Select/Select'
import { Button } from '../../ui/Button/Button'
import { statesData } from '../Waitlist/data'

export const ContactUs = () => {
  const { contactUsModalActive, setContactUsModalActive } =
    useContext(MainContext)

  return (
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
              <Input type="text" placeholder="First name" />
              <Input type="text" placeholder="Last name" />
            </div>
            <div className="input-group">
              <Input type="email" placeholder="Email" />
              <Input type="phone" placeholder="Phone number" />
            </div>
            <div className="input-group">
              <Input type="text" placeholder="First name" />
              <Input type="text" placeholder="First name" />
            </div>
            <div className="input-group">
              <Select
                initValue="AUM"
                data={[
                  `Less than $50M`,
                  `$50M to $250M`,
                  `$250M to $1B`,
                  `$1B to $10B`,
                  `More than $10B`,
                ]}
              />

              <Select initValue="State of residence" data={statesData} />
            </div>
            <Input type="message" placeholder="How can we help you?" />
          </div>
          <div className="bottom">
            <Button type="primary" icon="assets/icons/add.svg" iconBg={true}>
              Send message
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
