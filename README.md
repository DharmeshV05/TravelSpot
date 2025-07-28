# TravelSpot React

Modern travel discovery SPA built with **Vite + React + TypeScript + Tailwind CSS**.

## Features

- 🏔️ **Category chips & fuzzy search filter** - Filter destinations by category and search with intelligent matching
- 🖼️ **Modal details with accessibility** - Click any destination to see detailed information
- 🎠 **Review carousel auto-scroll** - User reviews that automatically scroll
- 🌙 **Dark-mode toggle** - Supports system preference and manual override
- 📧 **Newsletter signup** - Stores emails in LocalStorage with toast notifications
- 📱 **Fully responsive** - Works perfectly on all device sizes
- ♿ **Accessibility focused** - ARIA labels, keyboard navigation, screen reader support

## Tech Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Fuse.js** - Fuzzy search library
- **Heroicons** - Beautiful SVG icons
- **ESLint + Prettier** - Code quality and formatting

## Dev Setup

```bash
# Install dependencies
npm i

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint and fix code
npm run lint
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation and theme toggle
│   ├── Hero.tsx        # Hero section with CTA
│   ├── Filters.tsx     # Category filter chips
│   ├── SearchBox.tsx   # Fuzzy search input
│   ├── DestinationCard.tsx # Individual destination card
│   ├── DestinationsGrid.tsx # Grid with filtering logic
│   ├── Modal.tsx       # Destination details modal
│   ├── TravelTips.tsx  # Travel advice section
│   ├── ReviewsCarousel.tsx # Auto-scrolling reviews
│   └── Newsletter.tsx  # Email subscription with toast
├── context/            # React Context for state management
│   └── FilterContext.tsx # Global filter state
├── data/               # Static data and types
│   ├── destinations.ts # Destination data and interfaces
│   ├── tips.ts         # Travel tips data
│   └── reviews.ts      # User reviews data
├── hooks/              # Custom React hooks
│   └── useLocalStorage.ts # LocalStorage persistence
├── routes/             # Page components
│   └── Home.tsx        # Main page layout
├── styles/             # Global styles
│   └── globals.css     # Tailwind imports and custom CSS
├── App.tsx             # Main app with routing
└── main.tsx            # React entry point
```

## Key Features Explained

### Filtering & Search
- **Category Filtering**: Click category chips to filter destinations
- **Fuzzy Search**: Intelligent search across titles, descriptions, and locations
- **Combined Logic**: Search works within selected categories

### Dark Mode
- **System Preference**: Automatically detects user's preferred color scheme
- **Manual Toggle**: Users can override system preference
- **Persistent**: Remembers user's choice across sessions

### Accessibility
- **ARIA Labels**: Proper accessibility attributes throughout
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Optimized for screen readers
- **Focus Management**: Proper focus handling in modals

### Performance
- **Lazy Loading**: Images load as needed
- **Optimized Build**: Vite provides fast builds
- **Type Safety**: TypeScript prevents runtime errors

## Customization

### Adding Destinations
Edit `src/data/destinations.ts` to add new destinations:

```typescript
{
  id: 9,
  title: "New Destination",
  imageUrl: "https://example.com/image.jpg",
  category: "mountain", // or "beach", "forest", "desert", "history", "fun"
  location: "Location Name",
  price: 1500,
  rating: 4.8,
  duration: "5 days",
  description: "Description here...",
  highlights: ["Activity 1", "Activity 2"],
  bestTime: "June - September",
  difficulty: "Moderate"
}
```

### Styling
- **Tailwind Classes**: Use Tailwind utility classes for styling
- **Custom CSS**: Add custom styles in `src/styles/globals.css`
- **Brand Colors**: Modify `tailwind.config.ts` to change brand colors

## Deployment

The project builds to static files that can be deployed anywhere:

```bash
npm run build
```

The `dist/` folder contains all static assets ready for deployment.

## License

MIT License - feel free to use this project for your own travel website!