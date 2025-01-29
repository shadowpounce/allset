import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import './styles/index.scss'
import { MainContext } from './providers/MainContext'
import { useState } from 'react'
import { Waitlist } from '../features/Waitlist/Waitlist'
import { HowItWorks } from '../features/HowItWorks/HowItWorks'
import { ContactUs } from '../features/ContactUs/ContactUs'
import { ForAdvisors } from '../pages/ForAdvisors/ForAdvisors'

export const App = () => {
  const [waitlistModalActive, setWaitlistModalActive] = useState(false)
  const [contactUsModalActive, setContactUsModalActive] = useState(false)
  const [howItWorksModalActive, setHowItWorksModalActive] = useState(false)

  const [menuActive, setMenuActive] = useState(false)
  const [page, setPage] = useState('/')

  return (
    <MainContext.Provider
      value={{
        waitlistModalActive,
        setWaitlistModalActive,
        contactUsModalActive,
        setContactUsModalActive,
        menuActive,
        setMenuActive,
        howItWorksModalActive,
        setHowItWorksModalActive,
        page,
        setPage,
      }}
    >
      <Waitlist />
      <ContactUs />
      <HowItWorks />
      <>
        <BrowserRouter>
          <Routes>
            <Route key="Home" path="/" element={<Home />} />
            <Route
              key="For Advisors"
              path="/for-advisors"
              element={<ForAdvisors />}
            />
          </Routes>
        </BrowserRouter>
      </>
    </MainContext.Provider>
  )
}
