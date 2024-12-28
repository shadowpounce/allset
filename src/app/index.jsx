import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import './styles/index.scss'
import { MainContext } from './providers/MainContext'
import { useState } from 'react'
import { Waitlist } from '../features/Waitlist/Waitlist'
import { ContactUs } from '../features/ContactUs/ContactUs'
import { ForAdvisors } from '../pages/ForAdvisors/ForAdvisors'

export const App = () => {
  const [waitlistModalActive, setWaitlistModalActive] = useState(false)
  const [contactUsModalActive, setContactUsModalActive] = useState(false)
  const [menuActive, setMenuActive] = useState(false)

  return (
    <MainContext.Provider
      value={{
        waitlistModalActive,
        setWaitlistModalActive,
        contactUsModalActive,
        setContactUsModalActive,
        menuActive,
        setMenuActive,
      }}
    >
      <Waitlist />
      <ContactUs />
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
