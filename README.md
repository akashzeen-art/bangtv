# OTTYOGA - Yoga Streaming Platform

A modern React-based OTT (Over-The-Top) platform for yoga content streaming, featuring a beautiful red-themed UI with smooth animations and responsive design.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on all devices
- **Hero Slider**: Interactive carousel showcasing featured yoga content
- **Content Sections**: Popular content, featured content, and content carousels
- **TV Shows & Episodes**: Organized sections for series and episodes
- **User Authentication**: Login/Register modal with session management
- **Modern UI**: Clean and modern interface with smooth AOS animations
- **Red Theme**: Beautiful red color scheme throughout the application

## 📦 Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start the development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

4. **Preview production build:**
```bash
npm run preview
```

## 📁 Project Structure

```
OTTYOGA/FRONT-END/
├── public/                      # Static assets (served from root)
│   ├── images/                  # Static images
│   └── videos/                  # Static videos
│
├── src/
│   ├── assets/                  # Source assets
│   │   ├── images/              # Image assets
│   │   ├── videos/              # Video assets
│   │   └── styles/              # CSS stylesheets
│   │       ├── index.css       # Global styles
│   │       └── StaticPage.css  # Static page styles
│   │
│   ├── components/              # React components
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.jsx      # Navigation header
│   │   │   ├── Header.css
│   │   │   ├── Footer.jsx      # Footer component
│   │   │   ├── Footer.css
│   │   │   └── index.js        # Layout exports
│   │   │
│   │   ├── features/           # Feature components
│   │   │   ├── HeroSlider.jsx  # Main hero carousel
│   │   │   ├── PopularMovies.jsx
│   │   │   ├── MoviesCarousel.jsx
│   │   │   ├── FeaturedMovie.jsx
│   │   │   ├── TVShowsSection.jsx
│   │   │   ├── EpisodesSection.jsx
│   │   │   ├── FeaturedTVEpisodes.jsx
│   │   │   ├── Top9ThisWeek.jsx
│   │   │   ├── NewestMovies.jsx
│   │   │   ├── LoginModal.jsx
│   │   │   └── index.js        # Feature exports
│   │   │
│   │   └── pages/              # Page components
│   │       ├── Home.jsx        # Home page
│   │       ├── About.jsx       # About page
│   │       ├── Contact.jsx      # Contact page
│   │       ├── Pricing.jsx     # Pricing page
│   │       ├── Terms.jsx       # Terms of service
│   │       ├── Refund.jsx      # Refund policy
│   │       ├── Privacy.jsx     # Privacy policy
│   │       ├── MyAccount.jsx   # User account page
│   │       ├── ComingSoon.jsx   # Coming soon page
│   │       └── index.js        # Page exports
│   │
│   ├── constants/              # Application constants
│   │   ├── images.js           # Image data/URLs
│   │   └── index.js
│   │
│   ├── hooks/                  # Custom React hooks
│   │   └── index.js
│   │
│   ├── services/               # API services
│   │   └── index.js
│   │
│   ├── utils/                  # Utility functions
│   │   └── index.js
│   │
│   ├── types/                  # TypeScript types (if using TS)
│   │
│   ├── App.jsx                 # Main app component with routing
│   └── main.jsx                # Application entry point
│
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
```

## 🛠️ Technologies Used

- **React 18**: Modern UI library with hooks
- **React Router DOM 6**: Client-side routing
- **Vite 4**: Fast build tool and dev server
- **React Slick**: Carousel component library
- **Bootstrap 5**: CSS framework for responsive design
- **Font Awesome 6**: Icon library
- **Google Fonts**: Typography (Montserrat, Open Sans)
- **AOS (Animate On Scroll)**: Scroll animations

## 🎨 Customization

### Colors
Update CSS variables in `src/assets/styles/index.css`:
```css
:root {
  --primary-color: #dc2626;
  --secondary-color: #ef4444;
  /* ... more color variables */
}
```

### Content
- **Images**: Update image URLs in `src/constants/images.js`
- **Components**: Modify component data in respective component files
- **Routes**: Add/remove routes in `src/App.jsx`

### Adding New Components

1. **Layout Component**: Add to `src/components/layout/`
2. **Feature Component**: Add to `src/components/features/`
3. **Page Component**: Add to `src/components/pages/`

Don't forget to:
- Export from the appropriate `index.js` file
- Import and use in `App.jsx` or parent components

## 📝 Environment Variables

Create a `.env` file in the root directory (use `.env.example` as template):
```env
VITE_API_BASE_URL=http://localhost:8000/api
VITE_APP_NAME=OTTYOGA
VITE_APP_VERSION=1.0.0
```

## 🚦 Available Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is for educational purposes.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email support@ottyoga.com or open an issue in the repository.

---

**Built with ❤️ using React and Vite**
