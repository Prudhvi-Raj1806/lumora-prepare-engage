# Project Lumora - VR Disaster Preparedness Platform

A futuristic, cinematic marketing prototype for Team Akuno's gamified VR disaster-preparedness training platform.

## 🎯 Overview

Project Lumora is a next-generation platform that prepares students for real-world disasters through:
- **Immersive VR Training**: 6 realistic disaster scenarios
- **AI Spirit Guides**: Intelligent companions providing real-time guidance
- **Gamified Learning**: XP, achievements, and leaderboards
- **Real-Time Analytics**: Track performance and engagement

## 🎨 Design

- **Color Palette**: Tech blue (#1F2C73) and purple (#6C3FCF)
- **Aesthetic**: Futuristic, cinematic, trust-inspiring
- **Animations**: GSAP-powered with particle effects and tech grid backgrounds

## ✨ Features

### Cinematic Landing
- 10-second orb animation with roaming motion and trail effects
- Smooth GSAP timeline with waypoint navigation
- Accessibility: respects `prefers-reduced-motion`
- Optional "Skip" functionality

### Interactive Sections
1. **Hero**: Compelling tagline with VR mockup and animated stats
2. **Features**: 4 game-changing features with 3D hover effects
3. **Scenarios**: 6 VR training modules with difficulty ratings and start modals
4. **AI Guides**: 4 intelligent companions with stats and specializations
5. **Analytics**: Live dashboard with animated counters and progress bars
6. **Testimonials**: Featured review + autoplay carousel
7. **Team**: 6 team members with lightbox photo gallery

### Technical Highlights
- **GSAP**: Smooth animations and timeline control
- **Canvas**: Particle system and tech grid background
- **Responsive**: Mobile, tablet, and desktop optimized
- **Accessible**: Keyboard navigation, ARIA labels, reduced-motion support

## 🚀 Running the Project

The project is built with Vite + React + TypeScript:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open http://localhost:8080 in your browser.

## 📁 Project Structure

```
src/
├── assets/
│   ├── hero-vr-mockup.jpg    # Hero section VR device mockup
│   ├── orb-core.png           # Cinematic orb image
│   └── team/                  # Team member photos
├── components/
│   ├── ParticleBackground.tsx # Canvas particle system
│   ├── CinematicOrb.tsx       # GSAP orb animation
│   ├── Header.tsx             # Navigation header
│   ├── Hero.tsx               # Hero section
│   ├── Features.tsx           # Features grid
│   ├── Scenarios.tsx          # VR scenarios with modal
│   ├── AIGuides.tsx           # AI spirit guides
│   ├── Analytics.tsx          # Analytics dashboard
│   ├── Testimonials.tsx       # Testimonial carousel
│   ├── Team.tsx               # Team gallery with lightbox
│   ├── Footer.tsx             # Footer section
│   └── StartDialog.tsx        # Welcome dialog
└── pages/
    └── Index.tsx              # Main page orchestrator
```

## 🎬 Cinematic Orb Animation

The orb animation follows this flow:
1. **Spawn**: Appears at screen center with scale 0.95
2. **Roam**: Navigates through 4 waypoints with smooth curves
3. **Return**: Returns to exact center
4. **Expand**: Scales up to 4x and fades out
5. **Reveal**: Site content fades in

Trail effect: SVG path with fading alpha and shimmer particles.

## 🎨 Customization

### Update Logo
Replace the placeholder in `Header.tsx` with your own logo component or image.

### Replace Team Photos
Drop new images into `src/assets/team/` with the same filenames:
- asfiya.jpg
- koel.jpg
- utkarsh.jpg
- asmita.jpg
- prudhvi.jpg
- khushi.jpg

### Adjust Colors
Edit the design system in `src/index.css`:
```css
--lumora-blue: 229 66% 29%;
--lumora-purple: 263 54% 54%;
```

### Modify Orb Animation
Edit waypoints and timing in `src/components/CinematicOrb.tsx`:
```javascript
const waypoints = [
  { x: centerX + 200, y: centerY - 150 },
  // Add more waypoints...
];
```

## 🌐 Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notes

- All animations respect `prefers-reduced-motion`
- Particle system optimized for performance (100 particles)
- Images use ES6 imports for optimal bundling
- Fully responsive design with mobile-first approach

## 👥 Team Akuno

Built with passion by Team Akuno for the future of disaster preparedness.

**Powered by AI • Built for Resilience**
