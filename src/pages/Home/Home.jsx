import { Footer } from '../../app/layout/Footer/Footer'
import { Header } from '../../app/layout/Header/Header'
import { WithScrollSmoother } from '../../app/providers/WithScrollSmoother'
import { Benefits } from '../../screens/Benefits/Benefits'
import { Calculate } from '../../screens/Calculate/Calculate'
import { FAQ } from '../../screens/FAQ/FAQ'
import { Hero } from '../../screens/Hero/Hero'
import { PreFooter } from '../../screens/PreFooter/PreFooter'
import { SayHello } from '../../screens/SayHello/SayHello'
import { Solution } from '../../screens/Solution/Solution'

export const Home = () => {
  return (
    <WithScrollSmoother>
      <Header />
      <Hero />
      <Calculate />
      <SayHello />
      <Benefits />
      <Solution />
      <FAQ />
      <PreFooter />
      <Footer />
    </WithScrollSmoother>
  )
}
