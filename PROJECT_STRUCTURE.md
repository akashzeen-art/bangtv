# Project Structure Documentation

## Overview

This document provides a detailed breakdown of the OTTYOGA project structure, explaining the purpose of each directory and file.

## Directory Structure

### `/public`
Static assets that are served directly from the root URL. Files here are not processed by Vite and are copied as-is to the build output.

- `images/` - Static image files (e.g., logos, placeholders)
- `videos/` - Static video files

### `/src`
Source code directory containing all application logic and components.

#### `/src/assets`
Source assets that may be processed by Vite (e.g., imported in components).

- `images/` - Image assets used in components
- `videos/` - Video assets used in components
- `styles/` - CSS stylesheets
  - `index.css` - Global styles and CSS variables
  - `StaticPage.css` - Shared styles for static pages

#### `/src/components`
React components organized by purpose.

##### `/src/components/layout`
Layout components that appear on every page or define the overall page structure.

- `Header.jsx` - Main navigation header
- `Footer.jsx` - Footer component
- `index.js` - Barrel export for layout components

##### `/src/components/features`
Reusable feature components that can be used across different pages.

- `HeroSlider.jsx` - Hero carousel/slider
- `PopularMovies.jsx` - Popular content section
- `MoviesCarousel.jsx` - Content carousel with tabs
- `FeaturedMovie.jsx` - Featured content section
- `TVShowsSection.jsx` - TV shows listing
- `EpisodesSection.jsx` - Episodes listing
- `FeaturedTVEpisodes.jsx` - Recipe Transformation section
- `Top9ThisWeek.jsx` - Top 9 content this week
- `NewestMovies.jsx` - Newest content section
- `LoginModal.jsx` - Login/Register modal
- `index.js` - Barrel export for feature components

##### `/src/components/pages`
Page-level components that represent full pages/routes.

- `Home.jsx` - Home page
- `About.jsx` - About page
- `Contact.jsx` - Contact page
- `Pricing.jsx` - Pricing page
- `Terms.jsx` - Terms of service page
- `Refund.jsx` - Refund policy page
- `Privacy.jsx` - Privacy policy page
- `MyAccount.jsx` - User account page
- `ComingSoon.jsx` - Coming soon page
- `index.js` - Barrel export for page components

#### `/src/constants`
Application-wide constants and configuration data.

- `images.js` - Image URLs and image-related constants
- `index.js` - Barrel export for constants

#### `/src/hooks`
Custom React hooks for reusable logic.

- `index.js` - Barrel export for hooks

#### `/src/services`
API service functions and external service integrations.

- `index.js` - Barrel export for services

#### `/src/utils`
Utility functions and helpers.

- `index.js` - Barrel export for utilities

#### `/src/types`
TypeScript type definitions (if using TypeScript).

#### Root Files

- `App.jsx` - Main application component with routing logic
- `main.jsx` - Application entry point

## File Naming Conventions

- **Components**: PascalCase (e.g., `Header.jsx`, `HeroSlider.jsx`)
- **Styles**: PascalCase matching component name (e.g., `Header.css`, `HeroSlider.css`)
- **Utilities**: camelCase (e.g., `formatDate.js`, `apiClient.js`)
- **Constants**: camelCase (e.g., `images.js`, `routes.js`)
- **Hooks**: camelCase with `use` prefix (e.g., `useAuth.js`, `useLocalStorage.js`)

## Import Patterns

### Component Imports
```javascript
// From layout
import { Header, Footer } from './components/layout'

// From features
import { HeroSlider, PopularMovies } from './components/features'

// From pages
import { Home, About } from './components/pages'
```

### Asset Imports
```javascript
// CSS
import './assets/styles/index.css'
import '../../assets/styles/StaticPage.css'

// Images (if imported)
import logo from './assets/images/logo.png'

// Constants
import { portraitImages, landscapeImages } from './constants/images'
```

## Best Practices

1. **Component Organization**: Keep components in their appropriate folders (layout, features, pages)
2. **Barrel Exports**: Use `index.js` files for cleaner imports
3. **Asset Management**: 
   - Static assets → `/public`
   - Imported assets → `/src/assets`
4. **Constants**: Keep all constants in `/src/constants`
5. **Reusability**: Extract reusable logic into hooks or utils
6. **Styling**: Keep component-specific styles with components, shared styles in `/src/assets/styles`

## Adding New Features

1. **New Page**: Add to `/src/components/pages/` and update routes in `App.jsx`
2. **New Feature Component**: Add to `/src/components/features/` and export from `index.js`
3. **New Layout Component**: Add to `/src/components/layout/` and export from `index.js`
4. **New Utility**: Add to `/src/utils/` and export from `index.js`
5. **New Hook**: Add to `/src/hooks/` and export from `index.js`
6. **New Service**: Add to `/src/services/` and export from `index.js`

