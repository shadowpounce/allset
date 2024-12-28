import { useContext } from 'react'
import { Button } from '../../ui/Button/Button'
import { MainContext } from '../../app/providers/MainContext'

export const SpeakButton = ({ type = 'primary', animated = false }) => {
  const { setContactUsModalActive } = useContext(MainContext)

  return (
    <>
      {type === 'primary' ? (
        <Button
          animated={animated}
          onClick={() => setContactUsModalActive(true)}
          icon="assets/icons/add-white.svg"
          type="primaryWhite"
        >
          Speak with us
        </Button>
      ) : (
        <Button
          animated={animated}
          onClick={() => setContactUsModalActive(true)}
          icon="assets/icons/add.svg"
          type="primary"
          iconBg={true}
        >
          Speak with us
        </Button>
      )}
    </>
  )
}
