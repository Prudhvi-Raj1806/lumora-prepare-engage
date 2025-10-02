# Project Lumora - Static HTML/CSS/JS Version

A fully functional, vanilla JavaScript version of the Project Lumora VR disaster preparedness training platform.

## Files Structure

```
├── index-static.html    # Main HTML file
├── css/
│   └── styles.css       # All styling
├── js/
│   └── app.js          # All JavaScript logic
└── src/
    └── assets/         # Images (orb, team photos, hero mockup)
```

## How to Run

1. **Simple HTTP Server (Python)**
   ```bash
   python -m http.server 8000
   ```
   Then open http://localhost:8000/index-static.html

2. **Node.js HTTP Server**
   ```bash
   npx http-server
   ```

3. **PHP Built-in Server**
   ```bash
   php -S localhost:8000
   ```

4. **VS Code Live Server**
   - Install "Live Server" extension
   - Right-click `index-static.html` → "Open with Live Server"

## Features

✅ **Cinematic Orb Animation** - GSAP-powered intro with roaming orb and particle trail  
✅ **Particle Background** - Tech grid and connected particles using Canvas  
✅ **Start Dialog** - Modal to begin training scenarios  
✅ **Responsive Design** - Mobile, tablet, and desktop layouts  
✅ **Interactive Sections**:
- Hero with floating mockup image
- 4 feature cards with hover effects
- 6 VR training scenarios with start buttons
- 4 AI guide cards with stats
- Real-time analytics with animated counters
- Live training feed simulation
- Testimonial carousel with auto-advance
- Team gallery with lightbox modal

✅ **Accessibility** - Reduced motion support, keyboard navigation  
✅ **SEO Optimized** - Semantic HTML, meta tags, proper heading structure

## Dependencies

Only one external library required:
- **GSAP** (loaded from CDN) - For smooth animations

## Customization

### Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --lumora-blue: #1F2C73;
    --lumora-purple: #6C3FCF;
    --lumora-dark: #0A0E1A;
}
```

### Assets
Replace images in `src/assets/`:
- `orb-core.png` - Logo/orb image
- `hero-vr-mockup.jpg` - Hero section image
- `team/*.jpg` - Team member photos

### Content
Edit text directly in `index-static.html`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized particle count (100 particles)
- Efficient canvas rendering
- CSS animations with GPU acceleration
- Reduced motion fallback

## License

Created by Team Akuno for Project Lumora