import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../../assets/styles/StaticPage.css'

const Refund = () => {
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
        <h1 className="static-page__title">Refund Policy</h1>
        <p className="static-page__meta">Last Updated: 09-07-2025</p>
        <div className="static-page__divider" />
        <p>
          Refunds for OTT Bang TV subscriptions are handled directly by nServe Technology LLC. Requests are typically
          considered within a short window from the subscription start date and may be approved on a case–by–case basis
          depending on the circumstances and technical issues encountered.
        </p>
        <p>
          To request a refund or cancellation, contact us at&nbsp;
          <a href="mailto:info@nservetechnology.ae" className="static-page__link">
            info@nservetechnology.ae
          </a>
          &nbsp;with your mobile number, transaction details, and a short description of the issue.
        </p>
      </section>
    </main>
  )
}

export default Refund


