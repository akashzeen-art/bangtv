import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/eatmelogo.png'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 50
          setScrolled(isScrolled)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Staggered animation for nav links when menu opens
    if (isMenuOpen) {
      const timer = setTimeout(() => {
        const links = document.querySelectorAll('.navbar-nav .nav-link')
        links.forEach((link, i) => {
          setTimeout(() => {
            link.classList.add('animate-in')
            link.style.setProperty('--stagger-delay', i)
          }, i * 100)
        })
      }, 100)

      return () => clearTimeout(timer)
    } else {
      // Remove animation class when menu closes
      const links = document.querySelectorAll('.navbar-nav .nav-link')
      links.forEach(link => {
        link.classList.remove('animate-in')
      })
    }
  }, [isMenuOpen])

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = ''
      return
    }

    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden'

    const handleClickOutside = (event) => {
      const target = event.target
      const burgerButton = document.querySelector('.burger-menu')
      const navMenu = document.querySelector('.navbar-menu')
      const backdrop = document.querySelector('.menu-backdrop')
      
      // Don't close if clicking on burger button or menu
      if (
        (burgerButton && burgerButton.contains(target)) ||
        (navMenu && navMenu.contains(target))
      ) {
        return
      }
      
      // Close menu if clicking on backdrop or outside
      if (backdrop && backdrop.contains(target)) {
        setIsMenuOpen(false)
        return
      }
      
      // Close menu if clicking outside menu and backdrop
      if (!navMenu.contains(target) && !backdrop.contains(target)) {
        setIsMenuOpen(false)
      }
    }

    // Use capture phase to catch events early
    document.addEventListener('mousedown', handleClickOutside, true)
    document.addEventListener('touchstart', handleClickOutside, true)
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true)
      document.removeEventListener('touchstart', handleClickOutside, true)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
        document.body.style.overflow = ''
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }, [location.pathname])

  const handleLinkClick = (e, path) => {
    // Don't prevent default - let React Router handle navigation
    // Mark navigation source for My Account page BEFORE closing menu
    if (path === '/my-account') {
      sessionStorage.setItem('myAccountNavSource', 'menu')
    }
    
    // Close menu immediately for better UX
    setIsMenuOpen(false)
    
    // Ensure body scroll is restored
    document.body.style.overflow = ''
    
    // Small delay to ensure navigation completes
    setTimeout(() => {
      // Force scroll to top after navigation
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  return (
    <>
      {/* Backdrop Overlay */}
      <div 
        className={`menu-backdrop ${isMenuOpen ? 'active' : ''}`}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setIsMenuOpen(false)
        }}
        onTouchStart={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setIsMenuOpen(false)
        }}
        aria-hidden="true"
      />

      <header id="header" className={`header left-aligned-navbar ${scrolled ? 'scrolled' : ''}`} style={{ zIndex: 100 }}>
        <div className="header-section" style={{ background: 'rgba(0,0,0,0)', zIndex: 100 }}>
        <div className="container-fluid px-md-5">
            <nav className="navbar navbar-expand-xl py-0 position-static justify-content-between">
              {/* Logo */}
              <Link 
                to="/" 
                className="navbar-brand logo-container"
                onClick={(e) => {
                  e.preventDefault()
                  navigate('/')
                  setIsMenuOpen(false)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <img src={logo} alt="Bang Tv Logo" className="header-logo" />
              </Link>
              
              {/* Burger Menu Toggle */}
            <button
                className={`navbar-toggler burger-menu ${isMenuOpen ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setIsMenuOpen(prev => {
                    const newState = !prev
                    // Ensure body scroll is managed
                    if (newState) {
                      document.body.style.overflow = 'hidden'
                    } else {
                      document.body.style.overflow = ''
                    }
                    return newState
                  })
                }}
                onTouchStart={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                }}
                aria-label="Toggle navigation"
                aria-expanded={isMenuOpen}
                aria-controls="navBar"
                type="button"
            >
                <span className="burger-line"></span>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
            </button>
            </nav>
          </div>
        </div>

        {/* Navigation Menu */}
        <div 
          id="navBar" 
          className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
        >
          <div className="navbar-menu-inner">
              <ul className="navbar-nav">
                <li className="nav-item">
                <Link 
                  className="nav-link font-secondary" 
                  to="/"
                  onClick={(e) => handleLinkClick(e, '/')}
                >
                  <span className="nav-link-text">Home</span>
                </Link>
                </li>
                <li className="nav-item">
                <Link 
                  className="nav-link font-secondary" 
                  to="/about"
                  onClick={(e) => handleLinkClick(e, '/about')}
                >
                  <span className="nav-link-text">About Us</span>
                </Link>
                </li>
                <li className="nav-item">
                <Link 
                  className="nav-link font-secondary" 
                  to="/my-account"
                  onClick={(e) => handleLinkClick(e, '/my-account')}
                >
                  <span className="nav-link-text">My Account</span>
                </Link>
                </li>
                <li className="nav-item">
                <Link 
                  className="nav-link font-secondary" 
                  to="/contact"
                  onClick={(e) => handleLinkClick(e, '/contact')}
                >
                  <span className="nav-link-text">Contact Us</span>
                </Link>
                </li>
              </ul>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header

