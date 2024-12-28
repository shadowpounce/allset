import React, { useContext } from 'react'
import { Button } from '../../ui/Button/Button'
import { MainContext } from '../../app/providers/MainContext'

export const JoinButton = ({ animated = true }) => {
  const { setWaitlistModalActive } = useContext(MainContext)

  return (
    <Button
      onClick={() => {
        setWaitlistModalActive(true)
      }}
      className={animated && 'reveal scale'}
      type="primary"
      icon="assets/icons/add.svg"
      iconBg={true}
    >
      Join waitlist
    </Button>
  )
}
