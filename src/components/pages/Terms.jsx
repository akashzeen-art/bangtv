import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../../assets/styles/StaticPage.css'

const Terms = () => {
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
        <h1 className="static-page__title">Terms and Conditions</h1>
        <p className="static-page__meta">Last Updated: 30-06-2025</p>
        <div className="static-page__divider" />
        <p>
          These Terms and Conditions govern your use of the OTT BangTv service operated by nServe Technology LLC
          (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By accessing or using the platform you agree to be bound by these Terms.
        </p>
        <p>
          OTT BangTv is provided for personal, non–commercial use. You agree not to misuse the service, attempt unauthorized
          access, or infringe on any intellectual property rights related to the content or platform. Access, browsing or use
          of the service indicates your agreement to all the terms and policies referenced here.
        </p>
      </section>
    </main>
  )
}

export default Terms


