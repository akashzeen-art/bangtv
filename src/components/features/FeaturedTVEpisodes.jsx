import React from 'react'
import Slider from 'react-slick'
import { useSubscription } from '../../contexts/SubscriptionContext'
import './FeaturedTVEpisodes.css'

const FeaturedTVEpisodes = () => {
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

  // Custom arrow components that properly handle react-slick props
  const PrevArrow = ({ onClick, className, style }) => {
    return (
      <span 
        className={`fas fa-chevron-left dark slick-arrow slick-arrow-v1 slick-arrow-v11 left slick-arrow-right rounded-circle position-absolute bottom-0 ${className || ''}`}
        onClick={onClick}
        style={style}
        aria-label="Previous"
      />
    )
  }

  const NextArrow = ({ onClick, className, style }) => {
    return (
      <span 
        className={`fas fa-chevron-right dark slick-arrow slick-arrow-v1 slick-arrow-v11 right slick-arrow-right rounded-circle position-absolute ${className || ''}`}
        onClick={onClick}
        style={style}
        aria-label="Next"
      />
    )
  }

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    swipe: true,
    touchMove: true,
    draggable: true,
    variableWidth: true,
    adaptiveHeight: false,
    slideWidth: 260,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
          slideWidth: 260
        }
      },
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
          touchMove: true,
          draggable: true,
          variableWidth: true,
          slideWidth: 260
        }
      }
    ]
  }

  const episodes = [
    { id: 1, duration: '00:33 mins', category: 'Sensual', title: 'Gentle Pulse — Relaxed Sensual', image: '/thumbnails/landscape/18.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/7eed27ff-f1a9-4eb6-ace5-996079cd4f29/play_480p.mp4', description: 'Muted tones and close framing intensify private longing.', views: '3.8K' },
    { id: 2, duration: '00:36 mins', category: 'Erotic', title: 'Fluid Desire — Erotic Movement', image: '/thumbnails/landscape/19.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/b796d201-ca65-487b-9ca7-796fa7a9b895/play_480p.mp4', description: 'Plush visuals and nocturnal pacing craft a luxurious late-night mood.', views: '4.1K' },
    { id: 3, duration: '00:34 mins', category: 'Seductive', title: 'Warm Silhouette — Visual Sensual', image: '/thumbnails/landscape/20.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/2a013ea8-3462-403e-9c46-aec5a8deb34d/play_480p.mp4', description: 'Red-washed scenes signal passion, danger, and temptation.', views: '3.9K' },
    { id: 4, duration: '00:40 mins', category: 'Aesthetic', title: 'Sacred Motion — Artistic', image: '/thumbnails/landscape/21.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/541be462-6b2c-47a3-835b-99168a797c35/play_480p.mp4', description: 'Floating motion and relaxed pacing create soothing erotic immersion.', views: '4.3K' },
    { id: 5, duration: '00:34 mins', category: 'Euphoria', title: 'Bliss Alignment — Feel-Good Flow', image: '/thumbnails/landscape/22.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/97ba3590-8377-4149-9379-9892bc4dd66d/play_480p.mp4', description: 'Beneath calm visuals, tension quietly smolders.', views: '3.7K' },
    { id: 6, duration: '00:41 mins', category: 'Passion', title: 'Muted Fire — Controlled Heat', image: '/thumbnails/landscape/23.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/ff78f481-7e86-4162-a330-25ea8719707a/play_480p.mp4', description: 'Soft affection contrasts with forbidden undertones.', views: '4.0K' },
    { id: 7, duration: '00:42 mins', category: 'Allure', title: 'Inner Glow — Confidence & Body', image: '/thumbnails/landscape/24.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/93cd633c-01c5-4fce-a1bb-4f5c5be8b06a/play_720p.mp4', description: 'Desire feels freer, deeper, and more dangerous after dark.', views: '3.6K' },
    { id: 8, duration: '00:33 mins', category: 'Erotic', title: 'Slow Harmony — Calm Erotic', image: '/thumbnails/landscape/25.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/62beb908-7a35-46c2-bf42-ff0341456454/play_480p.mp4', description: 'Heat rises slowly through glances and body language.', views: '4.2K' },
    { id: 9, duration: '00:40 mins', category: 'Velvet', title: 'Velvet Ease — Comfort Flow', image: '/thumbnails/landscape/26.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/4541c353-fe34-4aa0-886a-78e2e147246c/play_480p.mp4', description: 'No words needed as visuals carry the erotic narrative.', views: '3.8K' },
    { id: 10, duration: '00:34 mins', category: 'Mystique', title: 'Quiet Bloom — Feminine Energy', image: '/thumbnails/landscape/27.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/a4cb839b-d738-4274-ac9f-3070c99f74a1/play_720p.mp4', description: 'Inviting tones and soft animation lure viewers closer.', views: '4.1K' },
    { id: 11, duration: '00:34 mins', category: 'Hypnotic', title: 'Soft Focus — Mindful Sensual', image: '/thumbnails/landscape/28.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/d2f9f61e-764f-4e10-8b1a-1686cbc1c494/play_480p.mp4', description: 'Reverent pacing transforms passion into ritual.', views: '3.9K' }
  ]
  const episodesWithResolvedImages = episodes.map((episode) => ({
    ...episode,
    image: resolveAssetPath(episode.image),
  }))

  const handleThumbnailClick = (episode) => {
    const videoData = {
      url: episode.videoUrl,
      title: episode.title,
      description: episode.description || `${episode.duration}, ${episode.category}`
    }
    checkAndPlayVideo(videoData)
  }

  return (
    <section className="bg-gray-1100 dark space-2 featured-tv-episodes-section" data-aos="fade-up">
      <div className="container px-md-4 featured-tv-episodes-container">
        <div className="tab-content slick__tab mb-12 mb-md-6">
          <div className="tab-pane fade show active" id="pills-one-code-features-1" role="tabpanel" aria-labelledby="pills-one-code-features-tab-1">
            {/* Centered Title Above Carousel */}
            <div className="row mb-4">
              <div className="col-12">
                <header className="text-center">
                  <h5 className="text-white display-7 mb-3 font-weight-semi-bold">Most Watched Animated Seduction Sessions</h5>
                </header>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="js-slick-carousel slick slick-gutters-2 slick-initialized slick-slider">
                  <Slider {...sliderSettings}>
                    {episodesWithResolvedImages.map((episode, index) => (
                      <div key={episode.id} className="product">
                        <div className="product-image mb-1">
                          <div 
                            className="d-inline-block position-relative stretched-link" 
                            onClick={() => handleThumbnailClick(episode)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault()
                                handleThumbnailClick(episode)
                              }
                            }}
                            style={{ cursor: 'pointer' }}
                          >
                            <img className="img-fluid" src={episode.image} alt={episode.title} loading="lazy" />
                          </div>
                        </div>
                        <div className="product-title">
                          <div className="d-inline-block">
                            <span className="text-gray-1300 font-size-12">{episode.duration}, {episode.category}</span>
                            <div className="mb-0 font-weight-bold font-size-1">{episode.title}</div>
                            {episode.description && (
                              <p className="product-description text-gray-1300 font-size-11 mb-1 mt-1">
                                {truncateDescription(episode.description)}
                              </p>
                            )}
                            {episode.views && (
                              <span className="product-views text-gray-1300 font-size-11">
                                {episode.views} views
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedTVEpisodes

