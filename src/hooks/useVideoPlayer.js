import { useState } from 'react'

export const useVideoPlayer = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const openVideo = (videoUrl) => {
    if (videoUrl) {
      setSelectedVideo(videoUrl)
      setIsVideoOpen(true)
    }
  }

  const closeVideo = () => {
    setIsVideoOpen(false)
    setSelectedVideo(null)
  }

  return {
    selectedVideo,
    isVideoOpen,
    openVideo,
    closeVideo
  }
}


