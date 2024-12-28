import { useContext } from 'react'
import { Button } from '../../ui/Button/Button'
import { MainContext } from '../../app/providers/MainContext'

export const SpeakButton = () => {
  const { setContactUsModalActive } = useContext(MainContext)

  return (
    <Button
      onClick={() => setContactUsModalActive(true)}
      icon="assets/icons/add-white.svg"
      type="primaryWhite"
    >
      Speak with us
    </Button>
  )
}
