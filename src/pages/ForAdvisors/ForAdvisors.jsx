import { Footer } from '../../app/layout/Footer/Footer'
import { Header } from '../../app/layout/Header/Header'
import { WithScrollSmoother } from '../../app/providers/WithScrollSmoother'
import { HeroAdvisors } from '../../screens/HeroAdvisors/HeroAdvisors'
import { Menu } from '../../widgets/Menu/Menu'

export const ForAdvisors = () => {
  return (
    <WithScrollSmoother>
      <Header />
      <Menu />
      <HeroAdvisors />
      <Footer />
    </WithScrollSmoother>
  )
}
