# AGARI - African Genomic Archive for Response & Insight

A brochure website for AGARI, built with React (via esm.sh) and Tailwind CSS v3.

## Overview

AGARI is a continental platform for archiving and sharing pathogen genomic information, enabling real-time surveillance to empower a swift response to disease threats across Africa.

## Tech Stack

- **React 19.1.0** - Loaded via ESM from https://esm.sh
- **Tailwind CSS v3** - Utility-first CSS framework
- **No Build Tools Required** - Uses native ES modules and import maps

## Getting Started

### Prerequisites

- Node.js and npm (for Tailwind CSS build process)
- Python 3 (for local development server) or any other static file server

### Installation

1. Install dependencies:

```bash
npm install
```

2. Build Tailwind CSS:

```bash
npm run build:css
```

Or watch for changes during development:

```bash
npm run watch:css
```

3. Start a local server:

```bash
npm run serve
```

Or use any static file server of your choice.

4. Open your browser and navigate to `http://localhost:8000`

## Project Structure

```
agari/
├── index.html           # Main HTML file with import maps
├── src/
│   ├── assets/         # Logos, illustrations, and other static media
│   ├── components/     # Shared UI building blocks (Header, Footer, etc.)
│   ├── guides/         # Guide content modules rendered on the site
│   ├── pages/          # Top-level page components (Landing, Guides, Guide)
│   ├── input.css       # Tailwind CSS source file
│   └── main.jsx        # Entry point that bootstraps the app
├── output.css          # Generated Tailwind CSS (created by build)
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
├── server.py           # Simple development server helper
└── README.md           # This file
```

## Design

The design was created in Figma and imported using the Figma MCP. The website features:

- Modern, clean design with a professional color palette
- Responsive layout optimized for desktop and mobile
- Custom typography using the Geist font family
- Interactive elements with hover states
- Semantic HTML structure

## Key Features

- **Hero Section** - Compelling introduction to AGARI's mission
- **Collaboration Section** - Highlights governance and partnerships
- **Upload & Validate** - Information about data submission
- **Explore Data** - Interactive map showing data coverage
- **Governance & Access** - Details about the platform's governance model
- **Challenge & Solution** - Context and value proposition
- **Footer** - Links and copyright information

## Development

### Building CSS

To rebuild the CSS after making changes:

```bash
npm run build:css
```

For development with auto-rebuild:

```bash
npm run watch:css
```

### Serving the Site

Use any static file server. The npm script uses Python's built-in HTTP server:

```bash
npm run serve
```

## Assets

Image assets are stored in the `src/assets/` folder and imported directly into the React components so that the bundler can optimize them. Replace the placeholders there with your actual logos, illustrations, and photography as needed.

## Notes

- Image assets live in `src/assets/` (placeholders created - replace with actual images) and should be imported where needed
- The site uses Geist font from Google Fonts
- Vite automatically serves files from the public folder

## License

All rights reserved © 2025 AGARI
