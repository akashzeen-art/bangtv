import React from 'react'
import { useSubscription } from '../../contexts/SubscriptionContext'
import bannerImage from '../../assets/images/bannerimg.jpg'
import './EpisodesSection.css'

const EpisodesSection = () => {
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

  const episodes = [
    { id: 1, season: 'S01E01', title: 'Quiet Heat — Low-Intensity Erotic', image: '/thumbnails/portrait/16.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/85cd614b-d9cd-4d01-8484-74fd9b4314f1/play_480p.mp4', description: 'Moody palettes and soft textures blend mystery with refined eroticism.', views: '3.9K' },
    { id: 2, season: 'S01E02', title: 'Soft Expansion — Flexibility Flow', image: '/thumbnails/portrait/17.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/8ff9e293-1a38-4f2b-83ab-d1ce39b2135f/play_480p.mp4', description: 'Shy expressions and gradual confidence create a charmingly erotic arc.', views: '4.2K' },
    { id: 3, season: 'S01E03', title: 'Night Balance — After-Dark', image: '/thumbnails/portrait/18.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/0b2d882e-4f06-4871-af5c-ffe7c87f4ce2/play_480p.mp4', description: 'Late-hour intimacy resonates through silence, shadow, and longing.', views: '3.7K' },
    { id: 4, season: 'S01E04', title: 'Golden Flow — Premium Wellness', image: '/thumbnails/portrait/19.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/e49b5faf-10b6-4c53-844d-c16ff20430cd/play_480p.mp4', description: 'Elegant animation highlights hands, gestures, and intentional closeness.', views: '4.1K' },
    { id: 5, season: 'S01E05', title: 'Velvet Touch — Sensual Movement', image: '/thumbnails/portrait/20.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/ba1611bb-e479-4d39-9e3b-0387ed94f9a3/play_480p.mp4', description: 'Subdued emotion and slow pacing allow desire to breathe naturally.', views: '3.8K' },
    { id: 6, season: 'S01E06', title: 'Moonlit Flow — Evening Practice', image: '/thumbnails/portrait/21.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/5796e395-c17a-47f1-b4f7-66fab75eb41d/play_480p.mp4', description: 'Affection deepens into fixation through repeated, intimate visual motifs.', views: '4.3K' },
    { id: 7, season: 'S01E07', title: 'Inner Fire — Energy Awakening', image: '/thumbnails/portrait/22.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/4b3bede9-1d16-4c97-9705-f7a69756289a/play_480p.mp4', description: 'Backlit figures and shadow play suggest intimacy without revealing everything.', views: '3.6K' },
    { id: 8, season: 'S01E08', title: 'Sacred Stretch — Deep Release', image: '/thumbnails/portrait/23.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/c4b56070-2a34-4b05-8ecb-40c978d25de6/play_480p.mp4', description: 'Stylized beauty and confident framing create irresistible animated charm.', views: '4.0K' },
    { id: 9, season: 'S01E09', title: 'Tender Balance — Gentle Flow', image: '/thumbnails/portrait/24.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/b92b23a4-4a49-44b7-aecb-d8fdccf92f6c/play_480p.mp4', description: 'Composure slowly slips as desire overcomes restraint.', views: '3.9K' },
    { id: 10, season: 'S01E10', title: 'Blissful Alignment — Perfect Posture', image: '/thumbnails/portrait/25.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/eb6f00dc-9ee9-42e2-98ef-03cdb0cb7b63/play_720p.mp4', description: 'Rhythmic cuts and surreal imagery evoke a hypnotic sensual state.', views: '4.2K' },
    { id: 11, season: 'S01E11', title: 'Radiant Energy — Power Flow', image: '/thumbnails/portrait/26.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/feb4b33b-cf23-4aa2-80e8-978b5a8fabc1/play_480p.mp4', description: 'A secluded world where desire unfolds without interruption.', views: '3.7K' },
    { id: 12, season: 'S01E12', title: 'Serene Completion — Final Flow', image: '/thumbnails/portrait/27.png', videoUrl: 'https://vz-eb88fa42-751.b-cdn.net/18d467e2-d5f4-4bd6-9f05-cead718976e5/play_480p.mp4', description: 'Vulnerability and closeness replace explicitness with emotional depth.', views: '4.1K' }
  ]

  const handleThumbnailClick = (episode) => {
    const videoData = {
      url: episode.videoUrl,
      title: episode.title,
      description: episode.description || `${episode.season} • Episode`
    }
    checkAndPlayVideo(videoData)
  }

  return (
    <div className="space-1 episodes-section" data-aos="fade-up" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="container my-3">
        <div className="text-center mb-5">
          <h3 className="display-7 mb-3 font-weight-semi-bold text-white" data-aos="zoom-in">
            Hentai Awakening Collection
          </h3>
          <p className="max-w-370 font-size-16 mx-auto text-gray-1300 mb-6" data-aos="fade-up" data-aos-delay="200">
            Watch Now
          </p>
        </div>
        
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 justify-content-center">
          {episodes.map((episode, index) => (
            <div key={episode.id} className="col mb-5 mb-xl-4" data-aos="zoom-in" data-aos-delay={index * 50}>
              <div className="product">
                <div className="product-image mb-2 product-image-portrait">
                  <div 
                    className="d-inline-block position-relative stretched-link product-link" 
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleThumbnailClick(episode)}
                  >
                    <img className="img-fluid" src={episode.image} alt={episode.title} loading="lazy" style={{ width: '180px', height: '270px', objectFit: 'cover', maxWidth: '100%', margin: '0 auto', display: 'block' }} />
                    <div className="play-overlay">
                      <div className="play-button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-gray-1300 font-size-12">{episode.season}</span>
                <div className="product-title font-weight-bold font-size-1">
                  <a className="d-inline-block product-title-link" href="#" onClick={(e) => { e.preventDefault(); handleThumbnailClick(episode); }}>
                    {episode.title}
                  </a>
                </div>
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
          ))}
        </div>
      </div>
    </div>
  )
}

export default EpisodesSection

