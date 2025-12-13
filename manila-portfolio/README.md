# Portfolio Website

A minimal, clean portfolio website built with React, Vite, React Router, and Tailwind CSS.

## Features

- **Clean Navigation**: Top navigation with ME, WORK, THOUGHTS, and RESUME links
- **Multiple Routes**: 
  - `/me` - Personal introduction and contact info
  - `/work` - Project showcase with category chips
  - `/work/:slug` - Individual project detail pages
  - `/thoughts` - Blog post listings
  - `/thoughts/:slug` - Individual blog post pages
  - Resume link to `/resume.pdf`
- **Minimal Design**: Lots of whitespace, left-aligned content, max-width 860px
- **Active State**: Visually distinct active navigation items
- **Responsive**: Mobile-friendly layout

## Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   └── Layout.jsx          # Shared layout with navigation
├── pages/
│   ├── Me.jsx              # About/contact page
│   ├── Work.jsx            # Projects listing
│   ├── WorkDetail.jsx      # Individual project page
│   ├── Thoughts.jsx        # Blog posts listing
│   └── ThoughtsDetail.jsx  # Individual blog post page
├── main.jsx                # App entry with router setup
└── index.css               # Tailwind imports
```

## Customization

- Edit content in the page files (`src/pages/`)
- Add your own projects in `Work.jsx` and `WorkDetail.jsx`
- Add your own blog posts in `Thoughts.jsx` and `ThoughtsDetail.jsx`
- Place your resume PDF in `public/resume.pdf`
- Customize colors and styles in `tailwind.config.js`

## Technologies

- React 19
- Vite 7
- React Router DOM 7
- Tailwind CSS 3
