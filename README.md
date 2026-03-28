# My Portfolio

A personal portfolio website built with **React 18**, **Vite**, and **Tailwind CSS 3**. It presents professional information in a modern, single-page layout with responsive design, 3D-feel animations, downloadable resume files, and a working contact form powered by EmailJS.

## Project Overview

The portfolio is designed to showcase personal branding, technical skills, featured work, professional services, blog content, supporting documents, and contact information in one smooth browsing experience. The application also includes a dark/light theme toggle persisted to `localStorage`, mobile-responsive navigation, scroll progress tracking, and a "skip to content" link for keyboard accessibility.

## Main Features

- **Single-page layout** with smooth scroll navigation and active section highlighting
- **Light / Dark theme** toggle persisted in `localStorage`; dark mode uses a gradient background (`slate-900 → slate-800 → orange-900`)
- **Scroll progress bar** at the top of the viewport (gradient: orange → rose → sky)
- **Back-to-top button** that appears after scrolling past 400 px
- **Mobile-friendly navigation** with animated hamburger menu (Framer Motion `AnimatePresence`)
- **Typed text animation** on the hero section with `useReducedMotion` support
- **3D hover and entrance animations** on cards and buttons using Framer Motion (`rotateX`, `rotateY`, `perspective`)
- **Resume modal** with PDF and Word download options
- **Contact form** with client-side validation (name, email, message) and EmailJS integration
- **Error boundary** wrapping the entire app to catch render errors gracefully
- **Accessibility**: skip-to-content link, ARIA roles on the progress bar, `aria-label` on navigation, `useReducedMotion` checks

## Sections

| Section       | Description                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------ |
| **Home**      | Hero area with animated emoji, typed intro text, gradient CTA button                                         |
| **About**     | Personal summary and profile image                                                                           |
| **Portfolio** | Featured project cards with expandable modal details                                                         |
| **Services**  | Professional capabilities displayed as animated cards                                                        |
| **Blog**      | Article cards with expandable content                                                                        |
| **Documents** | Downloadable files served from the `documents/` folder                                                       |
| **Contact**   | Social links (GitHub, etc.), contact info (email, phone, location via Heroicons), and validated message form |
| **Resume**    | Modal overlay with resume preview and file download buttons                                                  |

## Architecture

```
src/
├── main.jsx              # Entry point — React.StrictMode + ErrorBoundary
├── App.jsx               # Root component — theme, scroll tracking, section layout
├── components/           # One component per section + Navbar, Footer, ErrorBoundary
├── data/
│   ├── siteContent.js    # Barrel file re-exporting all section data
│   └── sections/         # Content data for each section (text, links, config)
├── styles/
│   ├── componentStyles.js # Barrel file re-exporting all style objects
│   └── sections/          # Tailwind class-string objects per section
└── assets/               # Images and static media
```

### Key architectural decisions

- **Data-driven content**: All user-facing text, links, and configuration live in `src/data/sections/`. Updating content requires no component changes.
- **Centralized styles**: Tailwind class strings are organized in `src/styles/sections/` and imported through a single barrel file (`componentStyles.js`), keeping component files clean.
- **Performance**: Scroll handling is throttled with `requestAnimationFrame`; section IDs are memoized with `useMemo`; callbacks use `useCallback`.
- **Theming**: Dark mode uses Tailwind's `class` strategy toggled on `<html>`, with Material Design-inspired custom shadows (`md1`–`md5`) and transition easings (`md-standard`, `md-emphasized`, `md-decelerate`).
- **Font**: Poppins (via Tailwind `fontFamily` config).

## Tech Stack

| Technology             | Version | Purpose                    |
| ---------------------- | ------- | -------------------------- |
| React                  | 18.2    | UI library                 |
| Vite                   | 7.3     | Build tool and dev server  |
| Tailwind CSS           | 3.4     | Utility-first styling      |
| Framer Motion          | 12.36   | Animations and transitions |
| Heroicons              | 2.2     | SVG icons (outline style)  |
| EmailJS Browser        | 4.4     | Client-side email sending  |
| PostCSS + Autoprefixer | —       | CSS processing             |

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Create a production build

```bash
npm run build
```

### Preview the production build locally

```bash
npm run preview
```

## Environment Variables

The contact form uses EmailJS. Create a `.env` file in the project root with:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> These values are available from your [EmailJS dashboard](https://dashboard.emailjs.com/).

## Content Management

All displayed content is driven from files in `src/data/sections/`. Each section has its own data module:

| File            | Exports                                        |
| --------------- | ---------------------------------------------- |
| `about.js`      | `aboutContent`                                 |
| `blog.js`       | `blogArticles`, `blogSectionContent`           |
| `contact.js`    | `contactSectionContent`                        |
| `documents.js`  | `documents`, `documentsSectionContent`         |
| `footer.js`     | `footerContent`                                |
| `home.js`       | `homeContent`                                  |
| `navigation.js` | `navigationLinks`                              |
| `portfolio.js`  | `portfolioProjects`, `portfolioSectionContent` |
| `resume.js`     | `resumeContent`                                |
| `services.js`   | `services`, `servicesSectionContent`           |

To update text, links, or section configuration, edit the relevant file — no component changes needed.

## Assets and Documents

- **Images** are stored in `src/assets/` and imported directly in components
- **Downloadable files** (resume PDFs, etc.) should be placed in the `documents/` folder at the project root

## Customization

1. **Theme colors** — Edit `tailwind.config.cjs` to adjust the color palette, shadows, and transition timings
2. **Sections** — Add or remove sections by updating `App.jsx` and the corresponding data/style/component files
3. **Fonts** — Change the font family in `tailwind.config.cjs` under `theme.extend.fontFamily`
4. **Animations** — Modify Framer Motion props in individual components or disable them for users who prefer reduced motion

## Use Case

This project can be used as a professional developer portfolio template for showcasing skills, projects, articles, resume downloads, and contact details in a polished and customizable format.
