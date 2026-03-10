import React, { createContext, useContext, useState } from 'react'
import SubscriptionPopup from '../components/features/SubscriptionPopup'
import { isSubscribed } from '../utils/subscription'

const SubscriptionContext = createContext()

export const useSubscription = () => {
  const context = useContext(SubscriptionContext)
  if (!context) {
    throw new Error('useSubscription must be used within SubscriptionProvider')
  }
  return context
}

export const SubscriptionProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [pendingVideo, setPendingVideo] = useState(null)

  const getVideoUrl = (videoData) => {
    const videoUrl = typeof videoData === 'object' && videoData?.url ? videoData.url : videoData
    const videoTitle = typeof videoData === 'object' && videoData?.title ? videoData.title : ''
    const videoDescription = typeof videoData === 'object' && videoData?.description ? videoData.description : ''
    
    const params = new URLSearchParams({
      url: videoUrl
    })
    if (videoTitle) params.append('title', videoTitle)
    if (videoDescription) params.append('description', videoDescription)
    
    return `/watch?${params.toString()}`
  }

  const checkAndPlayVideo = (videoData) => {
    // Save scroll position before navigating
    sessionStorage.setItem('scrollPosition', window.scrollY.toString())
    
    if (isSubscribed()) {
      // User is subscribed, navigate to video page
      const videoPath = getVideoUrl(videoData)
      window.location.href = videoPath
    } else {
      // User is not subscribed, open popup
      setPendingVideo(videoData)
      setIsPopupOpen(true)
    }
  }

  const handleSubscribe = (subscriptionData) => {
    // Save scroll position before navigating
    sessionStorage.setItem('scrollPosition', window.scrollY.toString())
    
    // After subscription, navigate to the pending video
    if (pendingVideo) {
      const videoPath = getVideoUrl(pendingVideo)
      window.location.href = videoPath
    }
    setPendingVideo(null)
    setIsPopupOpen(false)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
    setPendingVideo(null)
  }

  return (
    <SubscriptionContext.Provider
      value={{
        isPopupOpen,
        openPopup: () => setIsPopupOpen(true),
        closePopup,
        checkAndPlayVideo,
        handleSubscribe
      }}
    >
      {children}
      <SubscriptionPopup 
        isOpen={isPopupOpen}
        onClose={closePopup}
        onSubscribe={handleSubscribe}
      />
    </SubscriptionContext.Provider>
  )
}

