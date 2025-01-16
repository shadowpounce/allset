import styles from './HowItWorks.module.scss'
import { Modal } from '../../widgets/Modal/Modal'
import { useContext } from 'react'
import { MainContext } from '../../app/providers/MainContext'
import clsx from 'clsx'

export const HowItWorks = () => {
  const { howItWorksModalActive, setHowItWorksModalActive } =
    useContext(MainContext)

  return (
    <Modal active={howItWorksModalActive} setActive={setHowItWorksModalActive}>
      <div className="modal-form">
        <div className={styles.howItWorks}>
          <h5>How It Works</h5>
          <p>
            The calculations assume investment performance of a portfolio with
            annual compounded growth of 8%, net of any applicable AUM fees. Your
            account may perform differently due to changes in recurring
            investments, time horizon, or returns. Assumes that contributions
            stop after age 21 of the child.
          </p>
        </div>
      </div>
    </Modal>
  )
}
