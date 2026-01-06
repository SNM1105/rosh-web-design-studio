# Rosh Portfolio Website

A modern, responsive portfolio website for a full-stack web designer and developer. Built with React and Vite.

## Features

- ✨ Modern, gradient-based design
- 📱 Fully responsive layout
- 🎨 Smooth animations and transitions
- 💼 Portfolio section with clickable project previews
- 💰 Pricing tiers for different service levels
- 📧 Contact form
- 🚀 Fast performance with Vite

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open your browser to the URL shown in the terminal (usually http://localhost:5173)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Your Information

1. **Portfolio Projects**: Edit the `projects` array in `src/components/Portfolio.jsx`

   - Replace image URLs with your actual project screenshots
   - Update project titles, descriptions, and links
   - Add your tech stack tags

2. **Pricing Plans**: Modify `pricingPlans` in `src/components/Services.jsx`

   - Adjust prices and features
   - Add or remove pricing tiers

3. **Contact Info**: Update contact details in `src/components/Contact.jsx`

   - Change email address
   - Update availability hours

4. **Social Links**: Edit footer links in `src/components/Footer.jsx`

5. **Colors**: Customize the gradient colors in CSS files
   - Main gradient: `#667eea` to `#764ba2`
   - Edit in various `.css` files to match your brand

## Structure

```
src/
├── components/
│   ├── Header.jsx/css     # Navigation header
│   ├── Hero.jsx/css       # Hero section with CTA
│   ├── About.jsx/css      # About and skills section
│   ├── Services.jsx/css   # Pricing plans
│   ├── Portfolio.jsx/css  # Project showcase
│   ├── Contact.jsx/css    # Contact form
│   └── Footer.jsx/css     # Footer with links
├── App.jsx                # Main app component
├── App.css                # Global app styles
├── index.css              # Global styles
└── main.jsx               # Entry point
```

## Technologies

- React 18
- Vite 5
- CSS3 (with CSS Grid & Flexbox)
- Google Fonts (Inter)

## License

MIT License - feel free to use this for your own portfolio!
