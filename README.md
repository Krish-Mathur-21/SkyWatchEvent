# Sky Watch Event Website

A modern, engaging React website for the Sky Watch stargazing event organized by the Aerospace Club. Built with a dark theme and futuristic design inspired by modern tech festival websites.

## Features

- 🌌 **Dark Theme Design** - Beautiful dark background with cyan/blue accents
- ✨ **Smooth Animations** - Engaging animations and transitions throughout
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎨 **Modern UI/UX** - Clean, professional interface
- ⭐ **Interactive Elements** - Hover effects and visual feedback
- 🔭 **Event Information** - Complete event details, schedule, and features

## Sections

1. **Hero Section** - Eye-catching introduction with animated telescope icon
2. **Event Details** - Date, time, location, and participant information
3. **Features** - What participants can expect from the event
4. **Schedule** - Detailed timeline of the event activities
5. **Footer** - Contact information and social media links

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Event Information

Edit the following files to customize event details:

- `src/components/Hero.jsx` - Main hero section text
- `src/components/EventDetails.jsx` - Event date, time, location
- `src/components/Schedule.jsx` - Event schedule timeline
- `src/components/Footer.jsx` - Footer information and links

### Change Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-dark: #0a0a0f;
  --secondary-dark: #1a1a2e;
  --accent-cyan: #00d4ff;
  --accent-blue: #0099cc;
  --accent-purple: #6c5ce7;
}
```

## Technologies Used

- React 18
- Vite
- CSS3 (with animations)
- Google Fonts (Orbitron, Rajdhani)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for the Aerospace Club's Sky Watch event.

