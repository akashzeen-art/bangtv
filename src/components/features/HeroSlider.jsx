import React, { useRef, useEffect, useState } from 'react'
import Slider from 'react-slick'
import './HeroSlider.css'

const HeroSlider = () => {
  const sliderRef = useRef(null)
  const videoRefs = useRef({})
  const [currentSlide, setCurrentSlide] = useState(0)

  // Video URLs for each slide
  const videoUrls = [
    'https://vz-eb88fa42-751.b-cdn.net/09ff78a3-2382-4d2e-a399-9569eaec7b87/play_360p.mp4',
    'https://vz-eb88fa42-751.b-cdn.net/1b1daffb-8c83-4cfc-8499-296f8d33ab82/play_360p.mp4',
    'https://vz-eb88fa42-751.b-cdn.net/235e6265-0a6d-4368-88cc-d4b50d014dff/play_360p.mp4'
  ]

  // Custom Arrow Components with proper event handling
  const PrevArrow = ({ onClick, className = '', style }) => {
    const handleClick = (e) => {
      e.preventDefault()
      e.stopPropagation()
      if (onClick) {
        onClick(e)
      } else if (sliderRef.current && sliderRef.current.slickPrev) {
        sliderRef.current.slickPrev()
      }
    }
    
    return (
      <button
        type="button"
        className={`slick-arrow slick-prev hero-slider-arrow ${className}`.trim()}
        onClick={handleClick}
        style={style}
        aria-label="Previous slide"
      />
    )
  }

  const NextArrow = ({ onClick, className = '', style }) => {
    const handleClick = (e) => {
      e.preventDefault()
      e.stopPropagation()
      if (onClick) {
        onClick(e)
      } else if (sliderRef.current && sliderRef.current.slickNext) {
        sliderRef.current.slickNext()
      }
    }
    
    return (
      <button
        type="button"
        className={`slick-arrow slick-next hero-slider-arrow ${className}`.trim()}
        onClick={handleClick}
        style={style}
        aria-label="Next slide"
      />
    )
  }

  const sliderSettings = {
    dots: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Disable autoplay - videos will control slide advancement
    fade: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: false,
    swipe: true,
    touchMove: true,
    draggable: true,
    beforeChange: (current, next) => {
      // Pause current video
      const currentVideo = videoRefs.current[`video-${current}`]
      if (currentVideo) {
        currentVideo.pause()
        currentVideo.currentTime = 0
      }
      
      // Prepare next video
      const nextVideo = videoRefs.current[`video-${next}`]
      if (nextVideo) {
        nextVideo.currentTime = 0
      }
    },
    afterChange: (current) => {
      setCurrentSlide(current)
      // Play current video
      const currentVideo = videoRefs.current[`video-${current}`]
      if (currentVideo) {
        currentVideo.currentTime = 0
        currentVideo.play().catch(err => {
          console.log('Video autoplay prevented:', err)
        })
      }
    }
  }

  // Handle video ref assignment
  const handleVideoRef = (index) => (ref) => {
    if (ref) {
      videoRefs.current[`video-${index}`] = ref
      
      // Set video properties
      ref.loop = false // Disable loop - video should play once and advance
      ref.muted = true
      ref.playsInline = true
      ref.preload = 'auto'
      
      // Error handling
      ref.onerror = () => {
        console.warn(`Video failed to load for slide ${index + 1}`)
        // If video fails, advance to next slide after a short delay
        setTimeout(() => {
          if (sliderRef.current && sliderRef.current.slickNext) {
            sliderRef.current.slickNext()
          }
        }, 2000)
      }
      
      // Play when video is ready (only for active slide)
      ref.oncanplay = () => {
        if (index === currentSlide) {
          ref.play().catch(err => {
            console.log('Video autoplay prevented:', err)
          })
        }
      }

      // Handle video ended - advance to next slide
      ref.onended = () => {
        // Advance to next slide when video finishes
        if (sliderRef.current && sliderRef.current.slickNext) {
          sliderRef.current.slickNext()
        }
      }
    }
  }

  // Initialize first video on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const firstVideo = videoRefs.current['video-0']
      if (firstVideo) {
        firstVideo.play().catch(err => {
          console.log('First video autoplay prevented:', err)
        })
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  // Pause all videos except current when slide changes
  useEffect(() => {
    Object.keys(videoRefs.current).forEach((key) => {
      const video = videoRefs.current[key]
      if (video) {
        const videoIndex = parseInt(key.replace('video-', ''))
        if (videoIndex !== currentSlide) {
          video.pause()
          video.currentTime = 0
        } else {
          video.play().catch(err => {
            console.log('Video play prevented:', err)
          })
        }
      }
    })
  }, [currentSlide])

  return (
    <div className="home-slider position-relative overflow-hidden">
      <Slider ref={sliderRef} {...sliderSettings}>
        {videoUrls.map((videoUrl, index) => (
          <div key={index}>
            <div className="bg-img-hero d-flex align-items-center min-h-676rem position-relative">
              <video
                ref={handleVideoRef(index)}
                className="slider-video-bg"
                autoPlay={index === 0}
                muted
                loop={false}
                playsInline
                preload="auto"
              >
                <source src={videoUrl} type="video/webm" />
                Your browser does not support the video tag.
              </video>
              
              <div className="container position-relative z-index-2">
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default HeroSlider

