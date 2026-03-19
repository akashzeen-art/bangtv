import React, { useRef } from 'react'
import { useSubscription } from '../../contexts/SubscriptionContext'
import './TVShowsSection.css'

const TVShowsSection = () => {
  const scrollContainerRef = useRef(null)
  const { checkAndPlayVideo } = useSubscription()
  const resolveAssetPath = (assetPath) => `${import.meta.env.BASE_URL}${assetPath.replace(/^\//, '')}`

  // Helper function to truncate description to first 4 words
  const truncateDescription = (description) => {
    if (!description) return ''
    const words = description.split(' ')
    if (words.length <= 4) {
      return description
    }
    return words.slice(0, 4).join(' ') + '...'
  }

  const shows = [
    { id: 1, title: 'Velvet Awakening', genres: ['Velvet', 'Sensual'], duration: '00:33', image: '/thumbnails/portrait/1.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/fc49300d-d121-4a65-bbf2-2ac5be197b56/play_480p.mp4', description: 'A slow anime awakening of desire, blending soft visuals, longing gazes, and sensual emotional tension.', views: '3.2K' },
    { id: 2, title: 'Crimson Desire', genres: ['Desire', 'Passion'], duration: '00:36', image: '/thumbnails/portrait/2.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/339ede22-3772-49f8-be54-d05e44441f04/play_480p.mp4', description: 'Deep crimson hues frame animated passion, teasing forbidden fantasies through expressive eyes and deliberate movement.', views: '4.1K' },
    { id: 3, title: 'Midnight Fantasy', genres: ['Fantasy', 'Nocturne'], duration: '00:34', image: '/thumbnails/portrait/3.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/224c2de9-cb29-4b47-94ad-ec109542f843/play_480p.mp4', description: 'Late-night anime fantasies unfold under moonlit moods, inviting viewers into intimate, seductive dreamscapes.', views: '3.8K' },
    { id: 4, title: 'Soft Temptation', genres: ['Temptation', 'Sensual'], duration: '00:40', image: '/thumbnails/portrait/4.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/5ba8ab28-a3d0-4860-a682-24c13dac51af/play_480p.mp4', description: 'Gentle movements and blushing expressions create a teasing atmosphere of restrained, slow-burn sensuality.', views: '4.5K' },
    { id: 5, title: 'Hidden Longing', genres: ['Desire', 'Obsession'], duration: '00:34', image: '/thumbnails/portrait/5.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/d8fd1bfe-ac69-4460-9863-984966eed655/play_480p.mp4', description: 'Unspoken desires surface through subtle glances, quiet tension, and emotionally charged animated moments.', views: '3.6K' },
    { id: 6, title: 'Silken Heat', genres: ['Sultry', 'Passion'], duration: '00:41', image: '/thumbnails/portrait/6.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/8851814e-4e6a-4390-880e-0861a90ad89e/play_480p.mp4', description: 'Smooth animation textures and warm tones heighten arousal, wrapping fantasy in luxurious visual softness.', views: '4.2K' },
    { id: 7, title: 'Gentle Obsession', genres: ['Obsession', 'Intimacy'], duration: '00:42', image: '/thumbnails/portrait/7.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/84386cda-4d97-431a-b333-5ab7e15439c6/play_480p.mp4', description: 'A tender fixation builds through lingering shots, expressive eyes, and emotionally intimate pacing.', views: '3.9K' },
    { id: 8, title: 'Moonlit Crave', genres: ['Nocturne', 'Desire'], duration: '00:35', image: '/thumbnails/portrait/8.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/f04d5125-473b-489f-9a57-02fbdfa14680/play_480p.mp4', description: 'Soft moonlight illuminates animated curves and longing stares, creating an alluring nocturnal fantasy mood.', views: '4.3K' },
    { id: 9, title: 'Quiet Seduction', genres: ['Seductive', 'Tease'], duration: '00:38', image: '/thumbnails/portrait/9.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/9c30c315-846d-468a-bf40-b7e13b46789a/play_480p.mp4', description: 'Minimal dialogue, slow pacing, and intimate framing intensify seductive anime tension.', views: '3.7K' },
    { id: 10, title: 'Velour Passion', genres: ['Velvet', 'Passion'], duration: '00:36', image: '/thumbnails/portrait/10.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/0b9278e2-07d7-46be-896e-fcd500c46f58/play_480p.mp4', description: 'Rich textures and flowing motion amplify desire, blending elegance with unspoken erotic energy.', views: '4.0K' },
    { id: 11, title: 'Blush Control', genres: ['Tease', 'Temptation'], duration: '00:39', image: '/thumbnails/portrait/11.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/e28041b1-1ca8-4f2a-80b1-51a01466bc90/play_480p.mp4', description: 'Subtle dominance emerges through flushed expressions, poised gestures, and controlled sensual storytelling.', views: '3.5K' },
    { id: 12, title: 'Secret Pulse', genres: ['Mystique', 'Desire'], duration: '00:37', image: '/thumbnails/portrait/12.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/0b9278e2-07d7-46be-896e-fcd500c46f58/play_480p.mp4', description: 'Rhythmic animation mirrors a racing heartbeat, building anticipation through restrained erotic suggestion.', views: '4.4K' },
    { id: 13, title: 'Slow Surrender', genres: ['Euphoria', 'Passion'], duration: '00:40', image: '/thumbnails/portrait/13.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/aa27c5df-98f9-4bee-84f3-df34adf5efca/play_480p.mp4', description: 'Gradual emotional release unfolds as characters soften, yielding to shared desire and closeness.', views: '3.4K' },
    { id: 14, title: 'Dark Allure', genres: ['Allure', 'Forbidden'], duration: '00:41', image: '/thumbnails/portrait/14.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/0f6436a8-5976-43fc-93d7-675a5985a0cb/play_480p.mp4', description: 'Shadows, mystery, and intense gazes craft a darker, seductive anime aesthetic.', views: '4.6K' },
    { id: 15, title: 'Fever Dream', genres: ['Dreamlike', 'Hypnotic'], duration: '00:43', image: '/thumbnails/portrait/15.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/62a1d597-a886-420b-a849-158a73f1296a/play_480p.mp4', description: 'Surreal visuals blur fantasy and desire, creating hypnotic, dreamlike sensual immersion.', views: '3.3K' }
  ]
  const showsWithResolvedImages = shows.map((show) => ({
    ...show,
    image: resolveAssetPath(show.image),
  }))

  const handleThumbnailClick = (show) => {
    const videoData = {
      url: show.videoUrl,
      title: show.title,
      description: show.description || show.genres.join(' • ')
    }
    checkAndPlayVideo(videoData)
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="space-1 bg-gray-2800 tv-shows-section" data-aos="fade-up">
      <div className="container my-3" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="row mb-4">
          <div className="col-12 d-flex justify-content-center">
            <header className="centered-header" data-aos="fade-down">
              <h3 className="display-7 text-white mb-3 font-weight-semi-bold text-center">
                Solo Animated Desire — Watch Now!
              </h3>
            </header>
          </div>
        </div>
        <div className="row mb-xl-5">
          <div className="col-12 tv-shows-scroll-wrapper" style={{ paddingLeft: 0, paddingRight: 0, position: 'relative' }}>
            <button 
              className="tv-shows-scroll-btn tv-shows-scroll-left"
              onClick={scrollLeft}
              aria-label="Scroll left"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div 
              ref={scrollContainerRef}
              className="row row-cols-2 row-cols-md-5 tv-shows-scroll-container" 
              style={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'hidden', marginLeft: 0, marginRight: 0 }}
            >
              {showsWithResolvedImages.map((show, index) => (
                <div key={show.id} className="col mb-5 mb-xl-0" data-aos="fade-up" data-aos-delay={index * 100} style={{ flex: '0 0 auto', minWidth: '150px', paddingLeft: '12px', paddingRight: '12px' }}>
                  <div className="product">
                    <div className="product-image mb-2 product-image-portrait">
                      <div 
                        className="d-inline-block position-relative stretched-link" 
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleThumbnailClick(show)}
                      >
                        <img className="img-fluid" src={show.image} alt={show.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div className="play-overlay">
                          <div className="play-button">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="text-gray-1300 font-size-12">{show.duration} mins</span>
                    <div className="product-title font-weight-bold font-size-1">
                      <a href="#" className="product-title-link" onClick={(e) => { e.preventDefault(); handleThumbnailClick(show); }}>{show.title}</a>
                    </div>
                    {show.description && (
                      <p className="product-description text-gray-1300 font-size-11 mb-1 mt-1">
                        {truncateDescription(show.description)}
                      </p>
                    )}
                    {show.views && (
                      <span className="product-views text-gray-1300 font-size-11">
                        {show.views} views
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button 
              className="tv-shows-scroll-btn tv-shows-scroll-right"
              onClick={scrollRight}
              aria-label="Scroll right"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TVShowsSection

