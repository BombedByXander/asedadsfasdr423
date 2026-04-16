# ProdByXander — Portfolio

A modern portfolio website built with TanStack Start, React, and TypeScript.

## Features

- 🎨 Modern design with animated background effects
- 🌙 Dark/Light theme support
- 📱 Fully responsive
- 🚀 Fast builds with Vite
- ⚡ Deployed on Vercel

## Tech Stack

- **Framework:** TanStack Start + React Router
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Icons:** Lucide React + React Icons
- **Deployment:** Vercel

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure build settings:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
3. **Deploy** - Vercel will automatically build and deploy your site

### Manual Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
npm run deploy
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── data/          # Static data and configurations
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
├── routes/        # Page routes and layouts
└── styles.css     # Global styles and animations
```

## Customization

- **Projects:** Edit `src/data/projects.ts` to add your projects
- **Setup:** Modify `src/data/setup.ts` for your PC setup
- **Links:** Update social links in `src/routes/index.tsx`
- **Styling:** Customize colors in `src/styles.css`

## License

MIT