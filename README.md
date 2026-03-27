# My Portfolio

This project is a personal portfolio website built with React, Vite, and Tailwind CSS. It presents professional information in a modern single-page layout with responsive design, animated content sections, downloadable resume files, and a working contact form.

## Project Overview

The portfolio is designed to showcase personal branding, technical skills, featured work, professional services, blog content, supporting documents, and contact information in one smooth browsing experience. The application also includes a dark mode toggle and mobile navigation for better usability across devices.

## Main Features

- Responsive single-page portfolio layout
- Light and dark theme support
- Mobile-friendly navigation menu
- Hero, About, Portfolio, Services, Blog, Documents, and Contact sections
- Resume modal with PDF and Word download options
- Contact form with client-side validation
- Email sending support using EmailJS
- Animated cards and section transitions using Framer Motion

## Sections Included

- Home: Introductory hero section and first impression
- About: Short personal summary and profile image
- Portfolio: Featured projects with modal details
- Services: Professional services and capabilities
- Blog: Article cards with expandable details
- Documents: Downloadable files from the `documents/` folder
- Contact: Social links, contact details, and a message form
- Resume: Modal-based resume preview and file downloads

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Heroicons
- EmailJS Browser SDK

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Environment Variables

The contact form uses EmailJS. Add the following variables in a `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Content Management

Most of the displayed content is driven from files in `src/data/sections/`. This makes it easy to update text, links, documents, services, blog entries, and resume content without changing the component structure.

## Assets and Documents

- Images are stored in `src/assets/`
- Downloadable files should remain in the `documents/` folder

## Use Case

This project can be used as a professional developer portfolio template for showcasing skills, projects, articles, resume downloads, and contact details in a polished and customizable format.
