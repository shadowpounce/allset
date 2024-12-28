import { Footer } from '../../app/layout/Footer/Footer'
import { Header } from '../../app/layout/Header/Header'
import { WithScrollSmoother } from '../../app/providers/WithScrollSmoother'

export const ForAdvisors = () => {
  return (
    <WithScrollSmoother>
      <Header />
      <Footer />
    </WithScrollSmoother>
  )
}
