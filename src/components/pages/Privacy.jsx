import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../../assets/styles/StaticPage.css'

const Privacy = () => {
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
        <h1 className="static-page__title">Privacy Policy</h1>
        <p className="static-page__meta">Last Updated: 14-07-2025</p>
        <div className="static-page__divider" />
        <p>
          This Privacy Policy explains how nServe Technology LLC collects, uses and protects information when you
          use the OTT BangTv service. By accessing the platform you consent to the practices described here.
        </p>
        <p>
          We may collect information such as your contact details, device information and usage data to operate and improve
          the service, process subscriptions, prevent fraud and communicate with you. For any questions or data–related
          requests, you can contact us at&nbsp;
          <a href="mailto:info@nservetechnology.ae" className="static-page__link">
            info@nservetechnology.ae
          </a>
          .
        </p>
      </section>
    </main>
  )
}

export default Privacy


