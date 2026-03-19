import React from 'react'
import { portraitImages, getPortraitVideo } from '../../constants/images'
import { useSubscription } from '../../contexts/SubscriptionContext'
import './PopularMovies.css'

const PopularMovies = () => {
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

  const movies = [
    { id: 1, title: 'Velvet Flow — Soft Hentai Fantasy', year: '2024', genres: ['Velvet', 'Sensual'], duration: '00:33', image: '/thumbnails/landscape/1.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/7d464249-fbc5-4a96-afe1-262f401762e3/play_480p.mp4', description: 'A slow anime awakening of desire, blending soft visuals, longing gazes, and sensual emotional tension.', views: '3.2K' },
    { id: 2, title: 'Midnight Stretch — Late-Night Wellness', year: '2024', genres: ['Nocturne', 'Mystique'], duration: '00:36', image: '/thumbnails/landscape/2.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/d7560f49-5874-4e8a-8838-e7def0dc43f9/play_480p.mp4', description: 'Deep crimson hues frame animated passion, teasing forbidden fantasies through expressive eyes and deliberate movement.', views: '4.1K' },
    { id: 3, title: 'Soft Awakening — Gentle Erotic', year: '2024', genres: ['Erotic', 'Sensual'], duration: '00:34', image: '/thumbnails/landscape/3.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/2aa9b663-5d33-4523-881e-bc160fb5d48c/play_480p.mp4', description: 'Late-night anime fantasies unfold under moonlit moods, inviting viewers into intimate, seductive dreamscapes.', views: '3.8K' },
    { id: 4, title: 'Inner Heat — Intimate Flow', year: '2024', genres: ['Intimacy', 'Passion'], duration: '00:40', image: '/thumbnails/landscape/4.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/2a16c6f3-507b-4f1e-ac02-15295a04c1cb/play_480p.mp4', description: 'Gentle movements and blushing expressions create a teasing atmosphere of restrained, slow-burn sensuality.', views: '4.5K' },
    { id: 5, title: 'Silken Motion — Luxury', year: '2024', genres: ['Velvet', 'Aesthetic'], duration: '00:34', image: '/thumbnails/landscape/5.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/2affe1f1-1065-4f05-a54f-24ca47b9013d/play_480p.mp4', description: 'Unspoken desires surface through subtle glances, quiet tension, and emotionally charged animated moments.', views: '3.6K' },
    { id: 6, title: 'Quiet Desire — Slow Sensual', year: '2024', genres: ['Sensual', 'Desire'], duration: '00:41', image: '/thumbnails/landscape/6.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/85f53642-38f1-42f4-bea7-6d2904e5e6bf/play_480p.mp4', description: 'Smooth animation textures and warm tones heighten arousal, wrapping fantasy in luxurious visual softness.', views: '4.2K' },
    { id: 7, title: 'Sacred Curves — Body Awareness', year: '2024', genres: ['Fantasy', 'Allure'], duration: '00:42', image: '/thumbnails/landscape/7.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/9d811517-58f9-4f6e-bddc-35dc16992cec/play_480p.mp4', description: 'A tender fixation builds through lingering shots, expressive eyes, and emotionally intimate pacing.', views: '3.9K' },
    { id: 8, title: 'Moonlit Balance — Night Flow', year: '2024', genres: ['Nocturne', 'Dreamlike'], duration: '00:33', image: '/thumbnails/landscape/8.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/efd0b961-4801-4e57-a04f-45fe7d4350bb/play_480p.mp4', description: 'Soft moonlight illuminates animated curves and longing stares, creating an alluring nocturnal fantasy mood.', views: '4.3K' },
    { id: 9, title: 'Warm Alignment — Deep Stretch', year: '2024', genres: ['Passion', 'Intimacy'], duration: '00:40', image: '/thumbnails/landscape/9.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/62670a47-ab7e-4247-8fc6-02d7ed0cbdea/play_480p.mp4', description: 'Minimal dialogue, slow pacing, and intimate framing intensify seductive anime tension.', views: '3.7K' },
    { id: 10, title: 'Tender Energy — Softcore', year: '2024', genres: ['Erotic', 'Temptation'], duration: '00:34', image: '/thumbnails/landscape/10.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/71a67c96-c52d-4a0c-8b66-709a0d5cfe43/play_480p.mp4', description: 'Rich textures and flowing motion amplify desire, blending elegance with unspoken erotic energy.', views: '4.0K' },
    { id: 11, title: 'Bliss Circuit — Sensory Flow', year: '2024', genres: ['Euphoria', 'Sensual'], duration: '00:41', image: '/thumbnails/landscape/11.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/c30c1a64-f06b-4386-ba0d-c5e2938d4c2d/play_480p.mp4', description: 'Subtle dominance emerges through flushed expressions, poised gestures, and controlled sensual storytelling.', views: '3.5K' },
    { id: 12, title: 'Ethereal Grace — Flowing Movement', year: '2024', genres: ['Dreamlike', 'Mystique'], duration: '00:38', image: '/thumbnails/landscape/12.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/05e506e3-6aa6-4480-859e-a224fa15f398/play_480p.mp4', description: 'Rhythmic animation mirrors a racing heartbeat, building anticipation through restrained erotic suggestion.', views: '4.4K' }
  ]
  const moviesWithResolvedImages = movies.map((movie) => ({
    ...movie,
    image: resolveAssetPath(movie.image),
  }))

  const handleThumbnailClick = (movie) => {
    const videoData = {
      url: movie.videoUrl,
      title: movie.title,
      description: movie.description || `${movie.year} • ${movie.genres.join(', ')}`
    }
    checkAndPlayVideo(videoData)
  }

  return (
    <section className="bg-gray-1100 dark popular-movies-section">
      <div className="container px-md-4">
        {/* Centered Header Above Thumbnails */}
        <div className="row">
          <div className="col-12">
            <header className="text-center popular-movies-header" data-aos="fade-down">
              <h3 className="display-7 text-white mb-3 font-weight-semi-bold">
                Most Watched Animated Sensual Sessions — Watch Now
              </h3>
              <p className="text-gray-1300 font-secondary font-weight-medium">
                Most Watched Animated Seduction Sessions
              </p>
            </header>
          </div>
        </div>

        {/* 3x4 Grid Layout - Centered Thumbnails */}
        <div className="row justify-content-center popular-movies-grid">
          <div className="col-12">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center">
              {moviesWithResolvedImages.map((movie, index) => (
                <div key={movie.id} className="col mb-5 mb-xl-4" data-aos="fade-up" data-aos-delay={index * 50}>
                  <div className="product">
                    <div className="product-image mb-2 product-image-landscape">
                      <div 
                        className="d-inline-block position-relative stretched-link product-link" 
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleThumbnailClick(movie)}
                      >
                        <img className="img-fluid" src={movie.image} alt={movie.title} loading="lazy" style={{ width: '270px', height: '152px', objectFit: 'cover', maxWidth: '100%' }} />
                        <div className="play-overlay">
                          <div className="play-button">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="text-gray-1300 font-size-12">{movie.duration} mins</span>
                    <div className="product-title font-weight-bold font-size-1">
                      <a href="#" className="product-title-link" onClick={(e) => { e.preventDefault(); handleThumbnailClick(movie); }}>{movie.title}</a>
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
    </section>
  )
}

export default PopularMovies

