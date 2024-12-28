import React from 'react'
import { SpeakButton } from '../../components/SpeakButton/SpeakButton'

export const HeroAdvisors = () => {
  return (
    <section className={styles.heroAdvisors}>
      <div className="container">
        <div className="section-group centered">
          <h1 className="split-text reveal opacity">
            Accessible trust funds
            <span>for your clients</span>
          </h1>
          <p className="txt-18 c-navy07">
            Offer trust funds as investment vehicles for minors for more of your
            clients
          </p>
          <SpeakButton />
        </div>
      </div>
    </section>
  )
}
