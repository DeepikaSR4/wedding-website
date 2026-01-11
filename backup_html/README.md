# Wedding Landing Page 💒

A beautiful, modern wedding landing page with elegant design and smooth animations.

## Features ✨

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Countdown Timer**: Live countdown to the wedding day
- **RSVP Form**: Collect guest responses
- **Smooth Animations**: Elegant scroll animations and transitions
- **Modern Aesthetics**: Beautiful gradient backgrounds and typography
- **SEO Optimized**: Proper meta tags and semantic HTML

## Sections 📑

1. **Hero Section**: Eye-catching introduction with names and date
2. **Our Story**: Share your love story with photos
3. **Event Details**: Ceremony and reception information
4. **Countdown**: Live countdown timer to the big day
5. **RSVP**: Guest response form
6. **Footer**: Social media and hashtag

## Quick Start 🚀

1. Open `index.html` in your browser
2. Customize the content:
   - Update bride and groom names
   - Set your wedding date
   - Add event details (venue, time, address)
   - Replace placeholder images with your photos
   - Update the love story text

## Customization Guide 🎨

### Update Wedding Date
Edit `script.js` line 7:
```javascript
const weddingDate = new Date(2024, 11, 31, 18, 0, 0).getTime();
// Format: (Year, Month-1, Day, Hour, Minute)
```

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #d4a574;
    --primary-dark: #b8895f;
    --secondary-color: #f5f0eb;
    --accent-color: #8b7355;
}
```

### Add Your Photos
Replace the placeholder in the "Our Story" section with your image:
```html
<div class="story-image">
    <img src="your-photo.jpg" alt="Our Photo">
</div>
```

## Technologies Used 💻

- HTML5
- CSS3 (with CSS Variables and Grid/Flexbox)
- Vanilla JavaScript
- Google Fonts (Playfair Display & Montserrat)

## Browser Support 🌐

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## File Structure 📁

```
wedding-website/
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Next Steps 🎯

1. **Customize Content**: Update all placeholder text with your information
2. **Add Photos**: Replace image placeholders with your photos
3. **Test RSVP**: Set up backend to collect RSVP responses (optional)
4. **Deploy**: Host on GitHub Pages, Netlify, or Vercel

## Deployment Options 🌍

### GitHub Pages (Free)
1. Create a GitHub repository
2. Push your code
3. Enable GitHub Pages in repository settings

### Netlify (Free)
1. Drag and drop your folder to netlify.com
2. Get instant deployment

### Vercel (Free)
1. Import your GitHub repository
2. Automatic deployment on every push

## Tips 💡

- Use high-quality images (compressed for web)
- Test on multiple devices before going live
- Consider adding a photo gallery section
- Add Google Maps integration for venue locations
- Set up email notifications for RSVP submissions

## License 📄

Free to use for your wedding! Customize as needed.

---

**Made with ❤️ for your special day**