import React from 'react'
import Slider from 'react-slick'
import { useSubscription } from '../../contexts/SubscriptionContext'
import './MoviesCarousel.css'

const MoviesCarousel = ({ variant = 'light', sectionTitle = 'Trending Movies' }) => {
  const { checkAndPlayVideo } = useSubscription()

  // Helper function to truncate description to first 4 words
  const truncateDescription = (description) => {
    if (!description) return ''
    const words = description.split(' ')
    if (words.length <= 4) {
      return description
    }
    return words.slice(0, 4).join(' ') + '...'
  }

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  const movies = [
    { id: 1, title: 'Fluid Rhythm — Movement Focus', year: '2024', genres: ['Seductive', 'Passion'], duration: '00:33', image: '/thumbnails/landscape/4.png', videoUrl: variant === 'dark' ? 'https://vz-eb88fa42-751.b-cdn.net/02a043b3-611e-4aea-a200-a05f46827497/play_480p.mp4' : 'https://vz-eb88fa42-751.b-cdn.net/fc49300d-d121-4a65-bbf2-2ac5be197b56/play_480p.mp4', description: 'Gradual emotional release unfolds as characters soften, yielding to shared desire and closeness.', views: '3.4K' },
    { id: 2, title: 'Golden Breath — Breathwork & Sensuality', year: '2024', genres: ['Sensual', 'Allure'], duration: '00:36', image: '/thumbnails/landscape/5.png', videoUrl: variant === 'dark' ? 'https://vz-eb88fa42-751.b-cdn.net/6ce4e27e-4beb-45ba-a5a9-503fdeb29a50/play_480p.mp4' : 'https://vz-eb88fa42-751.b-cdn.net/339ede22-3772-49f8-be54-d05e44441f04/play_480p.mp4', description: 'Shadows, mystery, and intense gazes craft a darker, seductive anime aesthetic.', views: '4.6K' },
    { id: 3, title: 'Slow Burn — Erotic', year: '2024', genres: ['Erotic', 'Temptation'], duration: '00:34', image: '/thumbnails/landscape/6.png', videoUrl: variant === 'dark' ? 'https://vz-eb88fa42-751.b-cdn.net/7d464249-fbc5-4a96-afe1-262f401762e3/play_480p.mp4' : 'https://vz-eb88fa42-751.b-cdn.net/224c2de9-cb29-4b47-94ad-ec109542f843/play_480p.mp4', description: 'Surreal visuals blur fantasy and desire, creating hypnotic, dreamlike sensual immersion.', views: '3.3K' },
    { id: 4, title: 'Lunar Pulse — Feminine Energy', year: '2024', genres: ['Allure', 'Mystique'], duration: '00:40', image: '/thumbnails/landscape/7.png', videoUrl: variant === 'dark' ? 'https://vz-eb88fa42-751.b-cdn.net/d7560f49-5874-4e8a-8838-e7def0dc43f9/play_480p.mp4' : 'https://vz-eb88fa42-751.b-cdn.net/5ba8ab28-a3d0-4860-a682-24c13dac51af/play_480p.mp4', description: 'Ritualistic imagery and reverent pacing elevate intimacy into a forbidden, almost sacred experience.', views: '4.2K' },
    { id: 5, title: 'Private Flow — Solo Sessions', year: '2024', genres: ['Intimacy', 'Desire'], duration: '00:34', image: '/thumbnails/landscape/8.png', videoUrl: variant === 'dark' ? 'https://vz-eb88fa42-751.b-cdn.net/2aa9b663-5d33-4523-881e-bc160fb5d48c/play_480p.mp4' : 'https://vz-eb88fa42-751.b-cdn.net/d8fd1bfe-ac69-4460-9863-984966eed655/play_480p.mp4', description: 'Close-up shots and hushed expressions evoke closeness, intimacy, and sensual comfort.', views: '3.8K' },
    { id: 6, title: 'Gentle Fire — Heat-Based', year: '2024', genres: ['Passion', 'Lustful'], duration: '00:41', image: '/thumbnails/landscape/9.png', videoUrl: variant === 'dark' ? 'https://vz-eb88fa42-751.b-cdn.net/2a16c6f3-507b-4f1e-ac02-15295a04c1cb/play_480p.mp4' : 'https://vz-eb88fa42-751.b-cdn.net/8851814e-4e6a-4390-880e-0861a90ad89e/play_480p.mp4', description: 'Smooth transitions and body language guide viewers through a seamless, seductive animated rhythm.', views: '4.1K' },
    { id: 7, title: 'Soft Power — Strength & Grace', year: '2024', genres: ['Sultry', 'Aesthetic'], duration: '00:42', image: '/thumbnails/landscape/10.png', videoUrl: variant === 'dark' ? 'https://vz-eb88fa42-751.b-cdn.net/2affe1f1-1065-4f05-a54f-24ca47b9013d/play_480p.mp4' : 'https://vz-eb88fa42-751.b-cdn.net/84386cda-4d97-431a-b333-5ab7e15439c6/play_480p.mp4', description: 'Paused moments and near-contact gestures intensify longing without explicit action.', views: '3.9K' },
    { id: 8, title: 'Velour Balance — Premium', year: '2024', genres: ['Velvet', 'Aesthetic'], duration: '00:33', image: '/thumbnails/landscape/11.png', videoUrl: variant === 'dark' ? 'https://vz-eb88fa42-751.b-cdn.net/85f53642-38f1-42f4-bea7-6d2904e5e6bf/play_480p.mp4' : 'https://vz-eb88fa42-751.b-cdn.net/f04d5125-473b-489f-9a57-02fbdfa14680/play_480p.mp4', description: 'Taboo undertones and restrained tension give this fantasy its irresistible edge.', views: '4.3K' },
    { id: 9, title: 'Calm Seduction — Relaxed Sensual', year: '2024', genres: ['Seductive', 'Sensual'], duration: '00:40', image: '/thumbnails/landscape/12.png', videoUrl: variant === 'dark' ? 'https://vz-eb88fa42-751.b-cdn.net/9d811517-58f9-4f6e-bddc-35dc16992cec/play_480p.mp4' : 'https://vz-eb88fa42-751.b-cdn.net/9c30c315-846d-468a-bf40-b7e13b46789a/play_480p.mp4', description: 'Gentle authority expressed through posture, eye contact, and controlled sensual animation.', views: '3.7K' },
    { id: 10, title: 'Silent Stretch — Minimal Flow', year: '2024', genres: ['Moody', 'Tease'], duration: '00:34', image: '/thumbnails/landscape/13.png', videoUrl: variant === 'dark' ? 'https://vz-eb88fa42-751.b-cdn.net/efd0b961-4801-4e57-a04f-45fe7d4350bb/play_480p.mp4' : 'https://vz-eb88fa42-751.b-cdn.net/0b9278e2-07d7-46be-896e-fcd500c46f58/play_480p.mp4', description: 'Golden lighting and polished visuals enhance a luxurious, high-end anime sensual experience.', views: '4.5K' },
    { id: 11, title: 'Radiant Flow — Energy Awakening', year: '2024', genres: ['Euphoria', 'Passion'], duration: '00:37', image: '/thumbnails/landscape/14.png', videoUrl: variant === 'dark' ? 'https://vz-eb88fa42-751.b-cdn.net/62670a47-ab7e-4247-8fc6-02d7ed0cbdea/play_480p.mp4' : 'https://vz-eb88fa42-751.b-cdn.net/e28041b1-1ca8-4f2a-80b1-51a01466bc90/play_480p.mp4', description: 'Wordless scenes rely on movement, breath, and proximity to convey rising desire.', views: '3.6K' },
    { id: 12, title: 'Serene Passion — Intimate Movement', year: '2024', genres: ['Passion', 'Intimacy'], duration: '00:39', image: '/thumbnails/landscape/15.png', videoUrl: variant === 'dark' ? 'https://vz-eb88fa42-751.b-cdn.net/71a67c96-c52d-4a0c-8b66-709a0d5cfe43/play_480p.mp4' : 'https://vz-eb88fa42-751.b-cdn.net/0b9278e2-07d7-46be-896e-fcd500c46f58/play_480p.mp4', description: 'Desire unfolds gradually like petals opening beneath the glow of animated night.', views: '4.0K' }
  ]

  const handleThumbnailClick = (movie) => {
    const videoData = {
      url: movie.videoUrl,
      title: movie.title,
      description: movie.description || `${movie.year} • ${movie.genres.join(', ')}`
    }
    checkAndPlayVideo(videoData)
  }

  const bgClass = variant === 'dark' ? 'bg-gray-1100 dark' : variant === 'dark-alt' ? 'bg-gray-2000 dark' : 'bg-gray-1500'

  return (
    <section className={`${bgClass} space-2 movies-carousel-section`} data-aos="fade-up">
      <div className="container px-md-4">
        <div className="tab-content slick__tab">
          <div className="tab-pane fade show active">
            <div className="row mb-4">
              <div className="col-12 d-flex justify-content-center">
                <header className="romantic-header centered-header" data-aos="fade-down">
                  <h3 className={`display-7 mb-3 font-weight-semi-bold romantic-title text-center ${variant === 'dark' || variant === 'dark-alt' ? 'text-white' : 'text-white'}`}>
                    {sectionTitle}
                  </h3>
                </header>
              </div>
            </div>
            <div className="row">
              <div className="col-12" data-aos="fade-left">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center">
                  {movies.map((movie, index) => (
                    <div key={movie.id} className="col mb-5 mb-xl-4" data-aos="zoom-in" data-aos-delay={index * 50}>
                      <div className="product">
                        <div className="product-image mb-2 product-image-landscape">
                          <div 
                            className="d-inline-block position-relative stretched-link product-link" 
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleThumbnailClick(movie)}
                          >
                            <img className="img-fluid" src={movie.image} alt={movie.title} loading="lazy" style={{ width: '270px', height: '152px', objectFit: 'contain', maxWidth: '100%', margin: '0 auto', display: 'block' }} />
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
        </div>
      </div>
    </section>
  )
}

export default MoviesCarousel

