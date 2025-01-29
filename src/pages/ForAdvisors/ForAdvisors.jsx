import { Footer } from '../../app/layout/Footer/Footer'
import { Header } from '../../app/layout/Header/Header'
import { WithScrollSmoother } from '../../app/providers/WithScrollSmoother'
import { HeroAdvisors } from '../../screens/HeroAdvisors/HeroAdvisors'
import { Menu } from '../../widgets/Menu/Menu'
import { useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { MainContext } from '../../app/providers/MainContext'
import { useEffect } from 'react'

export const ForAdvisors = () => {
  const { setPage } = useContext(MainContext)
  const { pathname } = useLocation()

  useEffect(() => {
    setPage(pathname)
  }, [])

  return (
    <WithScrollSmoother>
      <Header />
      <Menu />
      <HeroAdvisors />
      <Footer />
    </WithScrollSmoother>
  )
}
