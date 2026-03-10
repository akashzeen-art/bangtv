import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useSubscription } from '../../contexts/SubscriptionContext'
import { isSubscribed } from '../../utils/subscription'
import SubscriptionPopup from '../features/SubscriptionPopup'
import '../features/VideoPlayer.css'
import './VideoPlayerPage.css'

const VideoPlayerPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { handleSubscribe } = useSubscription()
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showSubscriptionPopup, setShowSubscriptionPopup] = useState(false)
  const containerRef = useRef(null)

  // Get video data from URL params
  const videoUrl = searchParams.get('url')
  const videoTitle = searchParams.get('title')
  const videoDescription = searchParams.get('description')

  // Check subscription status on mount
  useEffect(() => {
    if (!isSubscribed() && videoUrl) {
      setShowSubscriptionPopup(true)
    }
  }, [videoUrl])

  useEffect(() => {
    if (videoRef.current && videoUrl) {
      videoRef.current.currentTime = 0
      videoRef.current.pause()
      setIsPlaying(false)
      setIsLoading(true)
      setCurrentTime(0)
    }
  }, [videoUrl])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          exitFullscreen()
        } else {
          handleClose()
        }
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isFullscreen])

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      )
      setIsFullscreen(isCurrentlyFullscreen)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
    document.addEventListener('mozfullscreenchange', handleFullscreenChange)
    document.addEventListener('MSFullscreenChange', handleFullscreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange)
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange)
    }
  }, [])

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Play error:', err)
      })
      setIsPlaying(true)
    }
  }

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
      setIsLoading(false)
    }
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
      setVolume(newVolume)
      setIsMuted(newVolume === 0)
    }
  }

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value)
    if (videoRef.current) {
      videoRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  const enterFullscreen = () => {
    const element = containerRef.current || videoRef.current
    if (element) {
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      }
    }
  }

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    }
  }

  const toggleFullscreen = () => {
    if (isFullscreen) {
      exitFullscreen()
    } else {
      enterFullscreen()
    }
  }

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    setIsPlaying(false)
    setCurrentTime(0)
    navigate(-1) // Go back to previous page
  }

  const handleSubscriptionClose = () => {
    setShowSubscriptionPopup(false)
    navigate(-1) // Go back if user closes without subscribing
  }

  const handleSubscriptionSubmit = (subscriptionData) => {
    handleSubscribe(subscriptionData)
    setShowSubscriptionPopup(false)
    // Video will now be visible as user is subscribed
  }

  if (!videoUrl) {
    return (
      <div className="video-player-page-container">
        <div className="video-player-page-error">
          <h2>Video not found</h2>
          <button onClick={() => navigate('/')} className="video-player-page-back-btn">
            Go to Home
          </button>
        </div>
      </div>
    )
  }

  // Show subscription popup if user is not subscribed
  if (!isSubscribed() && showSubscriptionPopup) {
    return (
      <div className="video-player-page-container">
        <SubscriptionPopup 
          isOpen={showSubscriptionPopup}
          onClose={handleSubscriptionClose}
          onSubscribe={handleSubscriptionSubmit}
        />
      </div>
    )
  }

  return (
    <div className="video-player-page-container">
      <div className="video-player-page-wrapper">
        <button className="video-player-close" onClick={handleClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <button className="video-player-fullscreen" onClick={toggleFullscreen} aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}>
          {isFullscreen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 3V8H3M16 3H21V8M21 16V21H16M8 21H3V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 3H5C3.89543 3 3 3.89543 3 5V8M21 8V5C21 3.89543 20.1046 3 19 3H16M16 21H19C20.1046 21 21 20.1046 21 19V16M3 16V19C3 20.1046 3.89543 21 5 21H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
        
        <div className="video-player-wrapper" ref={containerRef}>
          {isLoading && (
            <div className="video-player-loading">
              <div className="video-player-spinner"></div>
              <p>Loading video...</p>
            </div>
          )}
          
          {!isPlaying && !isLoading && (
            <div className="video-player-play-overlay" onClick={handlePlay}>
              <div className="video-player-play-button">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                </svg>
              </div>
            </div>
          )}
          
          <video
            ref={videoRef}
            className="video-player-video"
            controls
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={() => setIsPlaying(false)}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onLoadStart={() => setIsLoading(true)}
            onCanPlay={() => setIsLoading(false)}
            preload="metadata"
          >
            <source src={videoUrl} type="video/webm" />
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {(videoTitle || videoDescription) && (
          <div className="video-player-info">
            {videoTitle && <h3 className="video-player-title">{videoTitle}</h3>}
            {videoDescription && <p className="video-player-description">{videoDescription}</p>}
          </div>
        )}
      </div>
    </div>
  )
}

export default VideoPlayerPage

