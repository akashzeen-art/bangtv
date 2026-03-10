import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './ComingSoon.css'

const ComingSoon = ({ title = "Coming Soon" }) => {
  const location = useLocation()

  useEffect(() => {
    // Ensure body scroll is restored
    document.body.style.overflow = ''
    
    // Initialize AOS when component mounts
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh()
    }
  }, [location.pathname])

  // Get page title based on route
  const getPageTitle = () => {
    if (title !== "Coming Soon") return title
    const path = location.pathname
    if (path === '/about') return 'About Us'
    if (path === '/contact') return 'Contact Us'
    return 'Coming Soon'
  }

  return (
    <main id="content" className="coming-soon-page">
      <div className="coming-soon-container">
        <div className="coming-soon-content" data-aos="fade-up">
          <h1 className="coming-soon-title">{getPageTitle()}</h1>
          <div className="coming-soon-divider"></div>
          <p className="coming-soon-message">We're working on something amazing. Check back soon!</p>
        </div>
      </div>
    </main>
  )
}

export default ComingSoon

