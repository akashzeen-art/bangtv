import React, { useRef, useEffect } from 'react'

const FixedVideoBackground = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.load()
      video.play().catch(() => {})
    }
  }, [])

  return (
    <div className="fixed-video-background">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="fixed-bg-video"
      >
        <source src="https://vz-eb88fa42-751.b-cdn.net/09ff78a3-2382-4d2e-a399-9569eaec7b87/play_360p.mp4" type="video/mp4" />
      </video>
      <div className="fixed-video-overlay"></div>
    </div>
  )
}

export default FixedVideoBackground