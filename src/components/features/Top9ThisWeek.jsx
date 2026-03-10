import React, { useState } from 'react'
import { useSubscription } from '../../contexts/SubscriptionContext'
import './Top9ThisWeek.css'

const Top9ThisWeek = () => {
  const [activeTab, setActiveTab] = useState('movies')
  const { checkAndPlayVideo } = useSubscription()

  const movies = [
    { id: 1, year: '1997', title: 'Private Rhythm — Solo Erotic', genre: 'Yoga, Erotic', videoUrl: 'https://postback.v1mobi.com/content/yoga_user/yoga_user_videos/1.mp4' },
    { id: 2, year: '2020', title: 'Warm Curves — Body Sculpt Flow', genre: 'Yoga, Sculpt', videoUrl: 'https://postback.v1mobi.com/content/yoga_user/yoga_user_videos/2.mp4' },
    { id: 3, year: '1999', title: 'Lunar Ease — Relaxation', genre: 'Yoga, Relaxation', videoUrl: 'https://postback.v1mobi.com/content/yoga_user/yoga_user_videos/3.mp4' },
    { id: 4, year: '1998', title: 'Gentle Intensity — Balanced Flow', genre: 'Yoga, Flow', videoUrl: 'https://postback.v1mobi.com/content/yoga_user/yoga_user_videos/4.mp4' },
    { id: 5, year: '1999', title: 'Sacred Ease — Restorative Sensual', genre: 'Yoga, Restorative', videoUrl: 'https://postback.v1mobi.com/content/yoga_user/yoga_user_videos/5.mp4' },
    { id: 6, year: '2004', title: 'Deep Calm — Meditative Yoga', genre: 'Yoga, Meditation', videoUrl: 'https://postback.v1mobi.com/content/yoga_user/yoga_user_videos/6.mp4' },
    { id: 7, year: '2008', title: 'Slow Radiance — Aesthetic Flow', genre: 'Yoga, Aesthetic', videoUrl: 'https://postback.v1mobi.com/content/yoga_user/yoga_user_videos/7.mp4' },
    { id: 8, year: '1999', title: 'Inner Caress — Sensory Yoga', genre: 'Yoga, Sensory', videoUrl: 'https://postback.v1mobi.com/content/yoga_user/yoga_user_videos/8.mp4' },
    { id: 9, year: '2004', title: 'Silent Desire — Minimal Erotic', genre: 'Yoga, Erotic', videoUrl: 'https://postback.v1mobi.com/content/yoga_user/yoga_user_videos/9.mp4' },
    { id: 10, year: '2021', title: 'Fluid Awareness — Mind-Body', genre: 'Yoga, Mindfulness', videoUrl: 'https://postback.v1mobi.com/content/yoga_user/yoga_user_videos/10.mp4' }
  ]

  const tvSeries = [
    { id: 1, year: '2008', title: 'Golden Calm — Luxury Relaxation', genre: 'Yoga, Luxury', videoUrl: 'https://postback.v1mobi.com/content/yoga_user/yoga_user_videos/11.mp4' },
    { id: 2, year: '1999', title: 'Warm Grace — Elegant Flow', genre: 'Yoga, Flow', videoUrl: 'https://postback.v1mobi.com/content/yoga_user/yoga_user_videos/12.mp4' },
    { id: 3, year: '2004', title: 'Soft Rhythm — Beginner Sensual', genre: 'Yoga, Beginner', videoUrl: 'https://postback.v1mobi.com/content/yoga_user/yoga_user_videos/13.mp4' },
    { id: 4, year: '1997', title: 'Velvet Presence — Premium Solo', genre: 'Yoga, Premium', videoUrl: 'https://postback.v1mobi.com/content/yoga_user/yoga_user_videos/14.mp4' },
    { id: 5, year: '2020', title: 'Quiet Strength — Controlled Power', genre: 'Yoga, Strength', videoUrl: 'https://postback.v1mobi.com/content/yoga_user/yoga_user_videos/15.mp4' },
    { id: 6, year: '1999', title: 'Gentle Seduction — Erotic Wellness', genre: 'Yoga, Erotic', videoUrl: 'https://postback.v1mobi.com/content/yoga_user/yoga_user_videos/16.mp4' },
    { id: 7, year: '1998', title: 'Blissful Flow — Signature Series', genre: 'Yoga, Signature', videoUrl: 'https://postback.v1mobi.com/content/yoga_user/yoga_user_videos/17.mp4' },
    { id: 8, year: '1999', title: 'Velvet Flow — Soft Hentai Fantasy', genre: 'Yoga, Sensual', videoUrl: 'https://postback.v1mobi.com/content/yoga_user/yoga_user_videos/1.mp4' },
    { id: 9, year: '2004', title: 'Midnight Stretch — Late-Night Wellness', genre: 'Yoga, Wellness', videoUrl: 'https://postback.v1mobi.com/content/yoga_user/yoga_user_videos/2.mp4' },
    { id: 10, year: '2022', title: 'Soft Awakening — Gentle Erotic Yoga', genre: 'Yoga, Erotic', videoUrl: 'https://postback.v1mobi.com/content/yoga_user/yoga_user_videos/3.mp4' }
  ]

  const handleItemClick = (item) => {
    const videoData = {
      url: item.videoUrl,
      title: item.title,
      description: `${item.year} • ${item.genre}`
    }
    checkAndPlayVideo(videoData)
  }

  return (
    <div className="col-md-5">
      <div className="bg-gray-3100 p-4 top-9-section" data-aos="fade-right">
          <div className="border-bottom d-xl-flex pb-3 mb-3 align-items-center border-gray-3200" data-aos="fade-down">
            {/* <h3 className="font-size-22 text-white mb-xl-0 mb-3 mb-xl-0 font-weight-semi-bold">
              Top 9 this Week
            </h3> */}
            <ul className="nav tab-nav__v9" role="tablist">
              <h3 className="font-size-22 text-white mb-xl-0 mb-3 mb-xl-0 font-weight-semi-bold ">
              Todays Recomendation
            </h3>
            </ul>
          </div>

          <div className="tab-content">
            <div className={`tab-pane fade ${activeTab === 'movies' ? 'show active' : ''}`}>
              <ol className="list-counter v1 list-unstyled">
                {movies.map((item, index) => (
                  <li key={item.id} className={`top9-list-item d-flex border-gray-3200 ${index < movies.length - 1 ? 'border-bottom' : ''} align-items-center`} data-aos="fade-left" data-aos-delay={index * 50}>
                    <div className="flex-grow-1">
                      <span className="font-size-12 text-gray-1300 mb-1 d-inline-block text-lh-1">{item.year}</span>
                      <h6 className="mb-1 font-size-14 font-weight-semi-bold">
                        <a href="#" className="text-white top9-title-link" onClick={(e) => { e.preventDefault(); handleItemClick(item); }}>{item.title}</a>
                      </h6>
                      <a href="#" className="font-size-12 h-g-primary top9-genre-link">{item.genre}</a>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className={`tab-pane fade ${activeTab === 'tv' ? 'show active' : ''}`}>
              <ol className="list-counter v1 list-unstyled">
                {tvSeries.map((item, index) => (
                  <li key={item.id} className={`top9-list-item d-flex border-gray-3200 ${index < tvSeries.length - 1 ? 'border-bottom' : ''} align-items-center`} data-aos="fade-left" data-aos-delay={index * 50}>
                    <div className="flex-grow-1">
                      <span className="font-size-12 text-gray-1300 mb-1 d-inline-block text-lh-1">{item.year}</span>
                      <h6 className="mb-1 font-size-14 font-weight-semi-bold">
                        <a href="#" className="text-white top9-title-link" onClick={(e) => { e.preventDefault(); handleItemClick(item); }}>{item.title}</a>
                      </h6>
                      <a href="#" className="font-size-12 h-g-primary top9-genre-link">{item.genre}</a>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Top9ThisWeek

