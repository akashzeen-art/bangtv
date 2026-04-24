import React from 'react'
import './BackgroundVideo.css'

const BackgroundVideo = () => {
  return (
    <>
      <div className="background-video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          x5-playsinline="true"
          preload="auto"
          className="background-video"
        >
          <source src="https://vz-eb88fa42-751.b-cdn.net/09ff78a3-2382-4d2e-a399-9569eaec7b87/play_360p.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="video-overlay"></div>
    </>
  )
}

export default BackgroundVideo