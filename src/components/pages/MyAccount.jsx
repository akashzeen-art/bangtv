import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './MyAccount.css'

const MyAccount = () => {
  const location = useLocation()
  const [isRefreshing, setIsRefreshing] = useState(false)

  useEffect(() => {
    // Ensure body scroll is restored when page loads
    document.body.style.overflow = ''
    
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    // Check navigation source first
    const navigationSource = sessionStorage.getItem('myAccountNavSource')
    
    // If coming from menu, skip auto-refresh completely
    if (navigationSource === 'menu') {
      // Clear the flag immediately
      sessionStorage.removeItem('myAccountNavSource')
      
      // Initialize AOS immediately
      if (typeof window !== 'undefined' && window.AOS) {
        setTimeout(() => {
          window.AOS.refresh()
        }, 100)
      }
      return // Exit early, no auto-refresh
    }
    
    // Only auto-refresh if coming directly (not from menu) and first time
    const hasRefreshedInSession = sessionStorage.getItem('myAccountRefreshed')
    
    if (!hasRefreshedInSession) {
      // Mark as refreshed in this session immediately
      sessionStorage.setItem('myAccountRefreshed', 'true')
      
      // Show refreshing indicator
      setIsRefreshing(true)
      
      // Auto-refresh the page after a short delay
      const refreshTimer = setTimeout(() => {
        window.location.reload()
      }, 1500)
      
      return () => {
        clearTimeout(refreshTimer)
      }
    }
    
    // Initialize AOS when component mounts
    if (typeof window !== 'undefined' && window.AOS) {
      // Initial refresh
      window.AOS.refresh()
      
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        window.AOS.refresh()
      }, 150)
      
      // Another refresh after animations settle
      setTimeout(() => {
        window.AOS.refresh()
      }, 500)
    }
  }, [location.pathname])

  return (
    <div className="my-account-page" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
      {isRefreshing && (
        <div className="refresh-indicator">
          <span>Refreshing page...</span>
        </div>
      )}
      
      <section className="my-account-section" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
        <div className="container" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
          {/* Page Header */}
          <div className="account-header" data-aos="fade-up" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
            <h1 className="my-account-title" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>My Account</h1>
            <p className="account-subtitle" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>Manage your account settings and preferences</p>
          </div>

          {/* Dashboard Card */}
          <div className="account-content" data-aos="fade-up" data-aos-delay="100" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
            <div className="dashboard-card" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
              <div className="card-icon" style={{ display: 'flex', visibility: 'visible', opacity: 1 }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
                  <path d="M12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6ZM12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12ZM12 15.5C9.66 15.5 7.5 16.4 6.07 18.07C7.28 19.28 9.54 20 12 20C14.46 20 16.72 19.28 17.93 18.07C16.5 16.4 14.34 15.5 12 15.5Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="card-title" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>Dashboard</h3>
              <div className="card-content" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                <p className="card-message" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                  Mobile number not found.
                </p>
                <a href="#" className="sign-in-link" style={{ display: 'inline-block', visibility: 'visible', opacity: 1 }}>
                  Sign In
                </a>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="account-info" data-aos="fade-up" data-aos-delay="200" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
            <div className="info-card" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
              <h4 style={{ display: 'block', visibility: 'visible', opacity: 1 }}>Account Information</h4>
              <p style={{ display: 'block', visibility: 'visible', opacity: 1 }}>Sign in to access your account details, watch history, and personalized recommendations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MyAccount
