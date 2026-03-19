import React, { useState } from 'react'
import { useSubscription } from '../../contexts/SubscriptionContext'
import './NewestMovies.css'

const NewestMovies = () => {
  const [activeTab, setActiveTab] = useState('today')
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

  const featuredMovie = {
    year: '2020',
    title: 'Velvet Flow — Soft Hentai Fantasy',
    description: 'Experience refined sensuality, crafted from tradition and elevated by desire.',
    image: '/thumbnails/landscape/3.png',
    videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/c30c1a64-f06b-4386-ba0d-c5e2938d4c2d/play_480p.mp4',
    views: '4.2K'
  }
  const featuredMovieWithResolvedImage = {
    ...featuredMovie,
    image: resolveAssetPath(featuredMovie.image),
  }

  const movies = [
    { id: 1, year: '2017', title: 'Midnight Stretch — Late-Night Wellness', genres: ['Nocturne', 'Sensual'], image: '/thumbnails/landscape/4.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/05e506e3-6aa6-4480-859e-a224fa15f398/play_480p.mp4', description: 'Soft affection meets forbidden attraction, balancing innocence and temptation.', views: '3.8K' },
    { id: 2, year: '1998', title: 'Soft Awakening — Gentle Erotic', genres: ['Erotic', 'Sensual'], image: '/thumbnails/landscape/5.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/fc49300d-d121-4a65-bbf2-2ac5be197b56/play_480p.mp4', description: 'Plush textures and lingering shots awaken deep, slow-burn cravings.', views: '4.1K' },
    { id: 3, year: '2019', title: 'Inner Heat — Intimate Flow', genres: ['Intimacy', 'Passion'], image: '/thumbnails/landscape/6.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/339ede22-3772-49f8-be54-d05e44441f04/play_480p.mp4', description: 'A confident presence dominates the frame, radiating allure through expressive animation.', views: '3.9K' },
    { id: 4, year: '2021', title: 'Silken Motion — Luxury', genres: ['Velvet', 'Aesthetic'], image: '/thumbnails/landscape/7.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/224c2de9-cb29-4b47-94ad-ec109542f843/play_480p.mp4', description: 'Playful restraint and teasing pauses create delicious, unresolved erotic tension.', views: '4.3K' },
    { id: 5, year: '2020', title: 'Quiet Desire — Slow Sensual', genres: ['Sensual', 'Desire'], image: '/thumbnails/landscape/8.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/5ba8ab28-a3d0-4860-a682-24c13dac51af/play_480p.mp4', description: 'Direct gazes and minimal framing reveal pure desire without distraction.', views: '3.6K' },
    { id: 6, year: '2018', title: 'Sacred Curves — Body Awareness', genres: ['Fantasy', 'Allure'], image: '/thumbnails/landscape/9.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/d8fd1bfe-ac69-4460-9863-984966eed655/play_480p.mp4', description: 'Fantasy visuals shimmer and dissolve, teasing pleasure just beyond reach.', views: '4.2K' },
    { id: 7, year: '2022', title: 'Moonlit Balance — Night Flow', genres: ['Nocturne', 'Dreamlike'], image: '/thumbnails/landscape/10.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/8851814e-4e6a-4390-880e-0861a90ad89e/play_480p.mp4', description: 'Soft lighting and intimate framing create a secluded, personal atmosphere of desire.', views: '3.7K' },
    { id: 8, year: '2023', title: 'Warm Alignment — Deep Stretch', genres: ['Passion', 'Intimacy'], image: '/thumbnails/landscape/11.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/84386cda-4d97-431a-b333-5ab7e15439c6/play_480p.mp4', description: 'Everything is felt through looks and gestures, never spoken aloud.', views: '4.0K' },
    { id: 9, year: '2024', title: 'Tender Energy — Softcore', genres: ['Erotic', 'Temptation'], image: '/thumbnails/landscape/12.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/f04d5125-473b-489f-9a57-02fbdfa14680/play_480p.mp4', description: 'Red tones pulse alongside movement, syncing desire with visual rhythm.', views: '3.5K' },
    { id: 10, year: '2024', title: 'Bliss Circuit — Sensory Flow', genres: ['Euphoria', 'Sensual'], image: '/thumbnails/landscape/13.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/9c30c315-846d-468a-bf40-b7e13b46789a/play_480p.mp4', description: 'Low saturation and quiet pacing let tension simmer beneath the surface.', views: '4.4K' },
    { id: 11, year: '2024', title: 'Ethereal Grace — Flowing Movement', genres: ['Dreamlike', 'Mystique'], image: '/thumbnails/landscape/3.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/0b9278e2-07d7-46be-896e-fcd500c46f58/play_480p.mp4', description: 'Almost-touch moments heighten anticipation and emotional intimacy.', views: '3.8K' },
    { id: 12, year: '2024', title: 'Radiant Flow — Energy Awakening', genres: ['Passion', 'Euphoria'], image: '/thumbnails/landscape/14.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/e28041b1-1ca8-4f2a-80b1-51a01466bc90/play_480p.mp4', description: 'A deliberate build of longing rewards patience with deep sensual payoff.', views: '4.1K' }
  ]
  const moviesWithResolvedImages = movies.map((movie) => ({
    ...movie,
    image: resolveAssetPath(movie.image),
  }))

  const handleFeaturedClick = () => {
    const videoData = {
      url: featuredMovie.videoUrl,
      title: featuredMovieWithResolvedImage.title,
      description: featuredMovieWithResolvedImage.description || `${featuredMovieWithResolvedImage.year} • Featured Movie`
    }
    checkAndPlayVideo(videoData)
  }

  const handleMovieClick = (movie) => {
    const videoData = {
      url: movie.videoUrl,
      title: movie.title,
      description: movie.description || `${movie.year} • ${movie.genres.join(', ')}`
    }
    checkAndPlayVideo(videoData)
  }

  return (
    <div className="col-12">
      <div className="py-4 p-md-4 ml-wd-3 newest-movies-section" data-aos="fade-left">
        <div className="border-bottom d-xl-flex pb-3 mb-4 align-items-center border-gray-3200" data-aos="fade-down">
          {/* <h3 className="font-size-22 text-white mb-xl-0 mb-3 mb-xl-0 font-weight-semi-bold">
            Newest Movies
          </h3> */}
          <ul className="nav tab-nav__v9" role="tablist">
            <h3 className="font-size-22 text-white mb-xl-0 mb-3 mb-xl-0 font-weight-semi-bold">
            Today
          </h3>
          </ul>
        </div>

        <div className="tab-content">
          <div className={`tab-pane fade ${activeTab === 'today' ? 'show active' : ''}`}>
            <div className="product">
              <div className="row">
                <div className="col-auto" data-aos="zoom-in">
                  <div className="product-image mb-3 mb-md-0 max-w-23rem newest-featured-image product-image-landscape">
                    <div 
                      className="d-inline-block position-relative stretched-link" 
                      style={{ cursor: 'pointer' }}
                      onClick={handleFeaturedClick}
                    >
                      <img className="img-fluid" src={featuredMovieWithResolvedImage.image} alt={featuredMovieWithResolvedImage.title} loading="lazy" style={{ width: '270px', height: '152px', objectFit: 'cover' }} />
                      <div className="play-overlay">
                        <div className="play-button">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col d-flex" data-aos="fade-left" data-aos-delay="200">
                  <div className="my-lg-auto ml-lg-3 mt-3">
                    <div className="product-meta font-size-12 mb-2">
                      <span><a href="#" className="h-g-primary">{featuredMovieWithResolvedImage.year}</a></span>
                    </div>
                    <div className="product-title font-weight-bold font-size-19 mb-3">
                      <a href="#" className="text-white newest-featured-title">{featuredMovieWithResolvedImage.title}</a>
                    </div>
                    <p className="text-gray-1800 font-size-14 mb-4 line-height-lg">{featuredMovieWithResolvedImage.description}</p>
                  </div>
                </div>
                <div className="w-100 mb-4"></div>
                <div className="col-12">
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center newest-movies-grid">
                    {moviesWithResolvedImages.map((movie, index) => (
                      <div key={movie.id} className="col mb-5 mb-xl-4" data-aos="fade-up" data-aos-delay={index * 50}>
                        <div className="product">
                          <div className="product-image mb-2 product-image-landscape">
                            <div 
                              className="d-inline-block position-relative stretched-link product-link" 
                              style={{ cursor: 'pointer' }}
                              onClick={() => handleMovieClick(movie)}
                            >
                              <img className="img-fluid" src={movie.image} alt={movie.title} loading="lazy" style={{ width: '270px', height: '152px', objectFit: 'cover', maxWidth: '100%', margin: '0 auto', display: 'block' }} />
                              <div className="play-overlay">
                                <div className="play-button">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <span className="text-gray-1300 font-size-12">{movie.year} • {movie.genres.join(', ')}</span>
                          <div className="product-title font-weight-bold font-size-1">
                            <a href="#" className="product-title-link" onClick={(e) => { e.preventDefault(); handleMovieClick(movie); }}>{movie.title}</a>
                          </div>
                          {movie.description && (
                            <p className="product-description text-gray-1300 font-size-11 mb-1 mt-1">
                              {truncateDescription(movie.description)}
                            </p>
                          )}
                          {movie.views && (
                            <span className="product-views text-gray-1300 font-size-11">
                              {movie.views} views
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewestMovies