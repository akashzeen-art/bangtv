import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../../assets/styles/StaticPage.css'

const Contact = () => {
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
        <h1 className="static-page__title">Contact Us</h1>
        <p className="static-page__meta">We’d love to hear from you</p>
        <div className="static-page__divider" />
        <p>
          For any queries related to OTT Bang TV subscriptions, billing, technical support or general feedback, please reach out
          to us:
        </p>
        <p>
          📧 Email:&nbsp;
          <a href="mailto:info@nservetechnology.ae" className="static-page__link">
            info@nservetechnology.ae
          </a>
          <br />
          nServe Technology LLC<br />
          FDRK 0460, Compass Building, Al Sohada Road, Al Hamara
Industrial Zone FZ, Ras Al Khaimah, UAE
        </p>
      </section>
    </main>
  )
}

export default Contact


