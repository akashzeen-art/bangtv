import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../../assets/styles/StaticPage.css'

const About = () => {
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
        <h1 className="static-page__title">About OTT Bang Tv</h1>
        <p className="static-page__meta">Premium Bang Tv video platform by nServe Technology LLC</p>
        <div className="static-page__divider" />
        <p>
          OTT Bang Tv is a curated streaming destination dedicated to OTT Bang Tv , mindfulness, and holistic wellness. Inspired by the
          original Bang Tv experience, our platform delivers high–quality video classes, series, and programs designed for all
          levels — from beginners to advanced practitioners.
        </p>
        <p>
          Backed by nServe Technology LLC, OTT Bang Tv focuses on delivering a smooth, mobile–first OTT experience with
          reliable streaming, intuitive navigation, and clear subscription flows, optimized for users across devices.
        </p>
      </section>
    </main>
  )
}

export default About


