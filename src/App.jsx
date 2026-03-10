import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { SubscriptionProvider } from './contexts/SubscriptionContext'
import Header from './components/layout/Header'
import Home from './components/pages/Home'
import MyAccount from './components/pages/MyAccount'
import LoginModal from './components/features/LoginModal'
import ComingSoon from './components/pages/ComingSoon'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Terms from './components/pages/Terms'
import Refund from './components/pages/Refund'
import Privacy from './components/pages/Privacy'
import VideoPlayerPage from './components/pages/VideoPlayerPage'
import BackgroundVideo from './components/features/BackgroundVideo'

function AppContent() {
  const location = useLocation()

  useEffect(() => {
    // Set document title
    document.title = 'Bang Tv'
    
    // Global functions for popup controls
    window.openSubscription = () => {
      const popup = document.getElementById('subscriptionPopup')
      if (popup) popup.classList.add('active')
    }

    window.openVideo = () => {
      const popup = document.getElementById('videoPopup')
      if (popup) popup.classList.add('active')
    }

    // Initialize AOS (Animate On Scroll) with smooth settings
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true, // Keep true for performance, but reset in Home component
        offset: 120,
        delay: 0,
        mirror: false,
        anchorPlacement: 'top-bottom',
      })
      
      // Optimized AOS refresh on resize with debouncing
      let resizeTimeout
      const handleResize = () => {
        clearTimeout(resizeTimeout)
        resizeTimeout = setTimeout(() => {
          requestAnimationFrame(() => {
            window.AOS.refresh()
          })
        }, 250)
      }
      
      window.addEventListener('resize', handleResize, { passive: true })
      return () => {
        window.removeEventListener('resize', handleResize)
        clearTimeout(resizeTimeout)
      }
    }
  }, [])

  // Optimized route change handler
  useEffect(() => {
    // Scroll to top when route changes (instant for better performance)
    // If we're returning from a video to the previous page, Home will restore scroll.
    const hasSavedScroll = typeof window !== 'undefined' && sessionStorage.getItem('scrollPosition')
    const shouldRestoreScrollOnHome = location.pathname === '/' && hasSavedScroll
    if (!shouldRestoreScrollOnHome) {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
    
    // Debounced AOS refresh for better performance
    if (typeof window !== 'undefined' && window.AOS) {
      const timeoutId = setTimeout(() => {
        requestAnimationFrame(() => {
          window.AOS.refresh()
        })
      }, 150)
      
      return () => clearTimeout(timeoutId)
    }
  }, [location.pathname])

  const isVideoPage = location.pathname === '/watch'

  return (
    <SubscriptionProvider>
      <div className="App">
        {!isVideoPage && <BackgroundVideo />}
        <div className="content-wrapper">
          {!isVideoPage && <Header />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watch" element={<VideoPlayerPage />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </div>
      </div>
    </SubscriptionProvider>
  )
}

function App() {
  return (
    <Router
      basename={import.meta.env.BASE_URL}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <AppContent />
    </Router>
  )
}

export default App

