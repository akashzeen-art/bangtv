import React, { useState, useEffect, useRef } from 'react'
import './HeroSection.css'

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const videoRefs = useRef([])
  const autoPlayTimerRef = useRef(null)

  // Video URLs
  const videos = [
    'https://vz-eb88fa42-751.b-cdn.net/09ff78a3-2382-4d2e-a399-9569eaec7b87/play_480p.mp4',
    'https://vz-eb88fa42-751.b-cdn.net/1b1daffb-8c83-4cfc-8499-296f8d33ab82/play_480p.mp4',
    'https://vz-eb88fa42-751.b-cdn.net/235e6265-0a6d-4368-88cc-d4b50d014dff/play_720p.mp4'
  ]

  // Handle video refs
  const setVideoRef = (index) => (ref) => {
    if (ref) {
      videoRefs.current[index] = ref
      
      // Set video properties
      ref.loop = false // Disable loop - video should play once and advance
      ref.muted = true
      ref.playsInline = true
      ref.preload = 'auto'
    }
  }

  // Go to next slide
  const goToNext = () => {
    setIsAutoPlaying(false)
    clearTimeout(autoPlayTimerRef.current)
    
    const nextIndex = (currentIndex + 1) % videos.length
    setCurrentIndex(nextIndex)
    
    // Resume autoplay after manual navigation
    setTimeout(() => {
      setIsAutoPlaying(true)
    }, 100)
  }

  // Go to previous slide
  const goToPrevious = () => {
    setIsAutoPlaying(false)
    clearTimeout(autoPlayTimerRef.current)
    
    const prevIndex = (currentIndex - 1 + videos.length) % videos.length
    setCurrentIndex(prevIndex)
    
    // Resume autoplay after manual navigation
    setTimeout(() => {
      setIsAutoPlaying(true)
    }, 100)
  }

  // Handle video play/pause and set up event handlers
  useEffect(() => {
    // Pause all videos
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause()
        video.currentTime = 0
      }
    })

    // Play current video
    const currentVideo = videoRefs.current[currentIndex]
    if (currentVideo) {
      currentVideo.currentTime = 0
      currentVideo.play().catch((err) => {
        console.log('Video autoplay prevented:', err)
      })
    }

    // Set up event handlers for all videos
    videoRefs.current.forEach((video, index) => {
      if (video) {
        // Handle video ended - advance to next slide
        video.onended = () => {
          if (isAutoPlaying && index === currentIndex) {
            const nextIndex = (currentIndex + 1) % videos.length
            setCurrentIndex(nextIndex)
          }
        }
        
        // Error handling
        video.onerror = () => {
          console.warn(`Video failed to load for slide ${index + 1}`)
          // If video fails, advance to next slide after a short delay
          if (isAutoPlaying && index === currentIndex) {
            setTimeout(() => {
              const nextIndex = (currentIndex + 1) % videos.length
              setCurrentIndex(nextIndex)
            }, 2000)
          }
        }
      }
    })
  }, [currentIndex, isAutoPlaying, videos.length])

  // Auto-play functionality - removed timer-based autoplay
  // Videos will now advance automatically when they finish playing
  // The onended event handler in setVideoRef handles the advancement

  // Initialize first video on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const firstVideo = videoRefs.current[0]
      if (firstVideo) {
        firstVideo.play().catch((err) => {
          console.log('First video autoplay prevented:', err)
        })
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="hero-section">
      <div className="hero-slides-container">
        {videos.map((videoUrl, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
          >
            <video
              ref={setVideoRef(index)}
              className="hero-video"
              muted
              loop={false}
              playsInline
              preload="auto"
            >
              <source src={videoUrl} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="hero-nav-btn hero-nav-prev"
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        className="hero-nav-btn hero-nav-next"
        onClick={goToNext}
        aria-label="Next slide"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="hero-indicators">
        {videos.map((_, index) => (
          <button
            key={index}
            className={`hero-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setIsAutoPlaying(false)
              clearTimeout(autoPlayTimerRef.current)
              setCurrentIndex(index)
              setTimeout(() => {
                setIsAutoPlaying(true)
              }, 100)
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSection

