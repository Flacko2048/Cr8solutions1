# CR8 Solutions Website

High-end, professional marketing agency website built with React, Tailwind CSS, and Motion/React.

## 🚀 Deployment to Netlify

### Quick Deploy

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Netlify will auto-detect the settings from `netlify.toml`
   - Click "Deploy site"

### Build Settings

The following settings are configured in `netlify.toml`:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Redirects**: Configured for React Router client-side routing

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Tech Stack

- **React 18** - UI framework
- **Tailwind CSS v4** - Styling
- **Motion/React** - Animations
- **React Router** - Client-side routing
- **Lucide React** - Icons
- **Vite** - Build tool

## 📄 Pages

- **Home** - Main landing page with Problem-Agitate-Solve content
- **Privacy Policy** - Data protection information
- **Terms of Service** - Legal terms and conditions
- **Cookie Policy** - Cookie usage information

## ✨ Features

- Responsive design
- Interactive animations
- Glassmorphism effects
- Bento grid layouts
- Booking form modal
- Newsletter subscription
- FAQ section

## 📞 Contact

For inquiries, use the contact form on the website or reach out through the booking modal.

---

Built with ❤️ by CR8 Solutions
