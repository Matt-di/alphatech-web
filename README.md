# Alphatech General Trading PLC Website

## Overview
A professional, multi-page React website for Alphatech General Trading PLC, built with Vite, featuring modern design aesthetics and configurable theming.

## 🎨 Features

### Pages
1. **Home** - Hero section with stats, services preview, and project showcase
2. **Services** - Detailed service descriptions with images
3. **About** - Company mission, vision, and values
4. **Contact** - Professional contact form with company information
5. **Privacy Policy** - Comprehensive privacy policy
6. **Terms of Service** - Complete terms and conditions

### Design Features
- ✅ **Premium Aesthetics**: Modern glassmorphism effects, gradients, and animations
- ✅ **Responsive Design**: Mobile-friendly layouts across all pages
- ✅ **Dynamic Theming**: Configurable colors and content via `src/config.js`
- ✅ **Professional Typography**: Outfit font from Google Fonts
- ✅ **Smooth Animations**: Framer Motion for page transitions
- ✅ **Interactive Elements**: Hover effects, scroll animations
- ✅ **SEO Optimized**: Proper meta tags and semantic HTML

### Technical Stack
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Vanilla CSS** - Custom styling with CSS variables

## 📁 Project Structure

```
alphatech-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Responsive navigation with scroll effects
│   │   └── Footer.jsx       # Footer with links and contact info
│   ├── pages/
│   │   ├── Home.jsx         # Landing page
│   │   ├── Services.jsx     # Services with images
│   │   ├── About.jsx        # Company information
│   │   ├── Contact.jsx      # Contact form
│   │   ├── PrivacyPolicy.jsx
│   │   └── TermsOfService.jsx
│   ├── assets/
│   │   └── hero-bg.png      # Hero background image
│   ├── config.js            # 🔧 Configuration file
│   ├── App.jsx              # Main app with routing
│   ├── App.css              # Component styles
│   ├── index.css            # Global styles and design system
│   └── main.jsx             # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## ⚙️ Configuration

All dynamic content and theming is managed through `src/config.js`:

### Theme Customization
```javascript
theme: {
  primaryColor: "#0f172a",    // Main dark color
  secondaryColor: "#3b82f6",  // Blue accent
  accentColor: "#10b981",     // Green accent
  backgroundColor: "#ffffff",
  textColor: "#1f2937",
  fontFamily: "'Outfit', sans-serif"
}
```

### Content Management
- Company name and tagline
- Mission and vision statements
- Service descriptions and features
- Contact information
- Social media links
- Project showcase

## 🚀 Getting Started

### Installation
```bash
cd /Users/matewosd/.gemini/antigravity/scratch/alphatech-website
npm install
```

### Development
```bash
npm run dev
```
Visit: http://localhost:5173

### Build for Production
```bash
npm run build
```

