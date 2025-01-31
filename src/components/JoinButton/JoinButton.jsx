import React, { useContext } from 'react'
import { Button } from '../../ui/Button/Button'
import { MainContext } from '../../app/providers/MainContext'

export const JoinButton = ({ animated = true, type, title }) => {
  const { setWaitlistModalActive } = useContext(MainContext)

  return (
    <Button
      onClick={() => {
        setWaitlistModalActive(true)
      }}
      btnType={type}
      className={animated && 'reveal scale'}
      type="primary"
      icon="assets/icons/add.svg"
      iconBg={true}
      title={title && title}
    >
      {title ? title : 'Join Waitlist'}
    </Button>
  )
}
