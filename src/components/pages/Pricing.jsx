import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../../assets/styles/StaticPage.css'

const Pricing = () => {
  const location = useLocation()

  useEffect(() => {
    document.body.style.overflow = ''
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh()
    }
  }, [location.pathname])

  return (
    <main id="content" className="static-page">
      <section className="static-page__container" data-aos="fade-up">
        <h1 className="static-page__title">Pricing</h1>
        <p className="static-page__meta">Simple, transparent plans for OTT YOGA</p>
        <div className="static-page__divider" />
        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__name">Weekly</span>
              <span className="pricing-card__price">₹65</span>
              <span className="pricing-card__old">₹130</span>
            </div>
            <div className="pricing-card__badge">50% OFF</div>
            <p className="pricing-card__desc">Short–term access to all OTT YOGA content.</p>
          </div>
          <div className="pricing-card pricing-card--highlight">
            <div className="pricing-card__header">
              <span className="pricing-card__name">Yearly</span>
              <span className="pricing-card__price">₹199</span>
              <span className="pricing-card__old">₹450</span>
            </div>
            <div className="pricing-card__badge">55% OFF</div>
            <p className="pricing-card__desc">Best value: unlimited yoga videos &amp; web series for a full year.</p>
          </div>
        </div>
        <p className="static-page__note">
          Actual activation and billing are handled by nServe Technology LLC. Plan availability and pricing may
          vary by campaign or partner.
        </p>
      </section>
    </main>
  )
}

export default Pricing


