import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroSection from '../features/HeroSection'
import PopularMovies from '../features/PopularMovies'
import MoviesCarousel from '../features/MoviesCarousel'
import FeaturedMovie from '../features/FeaturedMovie'
import TVShowsSection from '../features/TVShowsSection'
import EpisodesSection from '../features/EpisodesSection'
import FeaturedTVEpisodes from '../features/FeaturedTVEpisodes'
import NewestMovies from '../features/NewestMovies'
import Footer from '../layout/Footer'

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    // Only run when on Home page
    if (location.pathname !== '/') return

    // Reset body overflow
    document.body.style.overflow = ''
    
    const savedScroll = typeof window !== 'undefined' ? sessionStorage.getItem('scrollPosition') : null
    const shouldRestoreScroll = savedScroll !== null && savedScroll !== ''
    
    // Default behavior: scroll to top. If we have a saved scroll position (e.g. returning from /watch),
    // restore it instead.
    if (!shouldRestoreScroll) {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
    
    // Ensure all sections are visible
    const ensureVisibility = () => {
      const sections = document.querySelectorAll('.popular-movies-section, .movies-carousel-section, .featured-movie-section, .tv-shows-section, .episodes-section, .featured-tv-episodes-section, .bg-transparent section')
      sections.forEach(section => {
        if (section) {
          section.style.display = 'block'
          section.style.visibility = 'visible'
          section.style.opacity = '1'
          section.style.height = 'auto'
        }
      })
    }

    const restoreScrollPosition = () => {
      if (!shouldRestoreScroll) return
      const y = Number(savedScroll)
      if (!Number.isFinite(y)) {
        sessionStorage.removeItem('scrollPosition')
        return
      }

      // Restore after layout/paint so we land on the correct spot.
      requestAnimationFrame(() => {
        window.scrollTo({ top: y, behavior: 'auto' })
        setTimeout(() => {
          window.scrollTo({ top: y, behavior: 'auto' })
          sessionStorage.removeItem('scrollPosition')
        }, 50)
      })
    }
    
    // Force AOS to re-initialize all elements
    if (typeof window !== 'undefined' && window.AOS) {
      // Remove all AOS classes to force re-initialization
      const aosElements = document.querySelectorAll('[data-aos]')
      aosElements.forEach(el => {
        el.classList.remove('aos-animate')
        el.removeAttribute('data-aos-animate')
        // Ensure element is visible
        el.style.opacity = '1'
        el.style.visibility = 'visible'
        el.style.display = ''
      })
      
      // Ensure visibility first
      ensureVisibility()
      
      // Multiple refresh calls to ensure elements are re-initialized
      requestAnimationFrame(() => {
        window.AOS.refresh()
        restoreScrollPosition()
        
        // Additional refresh after a short delay to ensure DOM is ready
        setTimeout(() => {
          window.AOS.refresh()
          ensureVisibility()
          restoreScrollPosition()
          
          // Force re-animation of elements
          aosElements.forEach((el, index) => {
            setTimeout(() => {
              if (el && el.offsetParent !== null) { // Check if element is visible
                el.classList.add('aos-animate')
              }
            }, index * 50)
          })
        }, 150)
        
        // Final refresh after animations
        setTimeout(() => {
          window.AOS.refresh()
          ensureVisibility()
          restoreScrollPosition()
        }, 500)
      })
    } else {
      // Even without AOS, ensure visibility
      ensureVisibility()
      restoreScrollPosition()
    }
    
    // Force CSS animations to re-trigger by removing and re-adding animation classes
    const animatedSections = document.querySelectorAll('.popular-movies-section, .movies-carousel-section, .featured-movie-section, .tv-shows-section, .episodes-section, .featured-tv-episodes-section')
    animatedSections.forEach(section => {
      if (section) {
        section.style.animation = 'none'
        requestAnimationFrame(() => {
          section.style.animation = ''
          section.style.opacity = '1'
          section.style.visibility = 'visible'
          section.style.display = 'block'
        })
      }
    })
  }, [location.pathname])

  return (
    <>
      <HeroSection />
      
      <div>
        <div>
          <PopularMovies />
        </div>
        
        <div>
          <MoviesCarousel sectionTitle="Hot Animated Hentai Moments Everyone’s Watching — Watch Now!" />
        </div>
        
        <div>
          <FeaturedMovie />
        </div>
        
        <div>
          <TVShowsSection />
        </div>
        
        <div>
          <EpisodesSection />
        </div>
        
        <div>
          <FeaturedTVEpisodes />
        </div>
        
        <div>
          <MoviesCarousel sectionTitle="Top Liked Erotic Sensation Experiences — Watch Now!" variant="dark" />
        </div>
        
        <div>
          <section className="bg-transparent">
            <div className="container px-md-4">
              <div className="row">
                <NewestMovies />
              </div>
            </div>
          </section>
        </div>
        
        <div>
          <Footer />
        </div>
      </div>

      {/* Subscription Popup */}
      <div className="popup-overlay" id="subscriptionPopup" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div className="popup" style={{
          background: 'rgba(0, 0, 0, 0.9)',
          border: '2px solid #FF69B4',
          borderRadius: '20px',
          padding: '40px',
          maxWidth: '400px',
          width: '90%',
          textAlign: 'center'
        }}>
          <h3 style={{ color: 'white', marginBottom: '20px' }}>Join Our Yoga Community</h3>
          <input 
            type="tel" 
            id="phoneInput" 
            placeholder="Enter your phone number" 
            maxLength="10"
            style={{
              width: '100%',
              padding: '15px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '10px',
              color: 'white',
              marginBottom: '20px'
            }}
          />
          <button 
            onClick={() => {
              const phone = document.getElementById('phoneInput').value
              if (phone.length >= 8) {
                alert('Welcome to our Yoga Community! Your subscription is active.')
                document.getElementById('subscriptionPopup').style.display = 'none'
              } else {
                alert('Please enter a valid phone number.')
              }
            }}
            style={{
              width: '100%',
              padding: '15px',
              background: 'linear-gradient(45deg, #FF69B4, #FF91A4)',
              border: 'none',
              borderRadius: '10px',
              color: 'white',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Video Popup */}
      <div className="popup-overlay" id="videoPopup" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div className="popup" style={{
          background: 'rgba(0, 0, 0, 0.9)',
          border: '2px solid #FF69B4',
          borderRadius: '20px',
          padding: '40px',
          maxWidth: '800px',
          width: '90%',
          textAlign: 'center'
        }}>
          <h3 style={{ color: 'white', marginBottom: '20px' }}>Yoga Session</h3>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, margin: '20px 0' }}>
            <video 
              id="popupVideo" 
              controls
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '10px'
              }}
            >
              <source src="https://vz-eb88fa42-751.b-cdn.net/ae1a65fc-542c-4c29-9acc-5b6f1aedd492/play_480p.mp4" type="video/webm" />
            </video>
          </div>
          <button 
            onClick={() => {
              document.getElementById('videoPopup').style.display = 'none'
              document.getElementById('popupVideo').pause()
            }}
            style={{
              width: '100%',
              padding: '15px',
              background: 'linear-gradient(45deg, #FF69B4, #FF91A4)',
              border: 'none',
              borderRadius: '10px',
              color: 'white',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Close
          </button>
        </div>
      </div>
    </>
  )
}

export default Home

