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
│   ├── App.jsx         # Main React component
│   ├── main.jsx        # Entry point
│   └── input.css       # Tailwind CSS input file
├── public/
│   └── assets/         # Image assets (logos, icons, graphics)
│       └── README.md   # Asset documentation
├── output.css          # Generated Tailwind CSS (created by build)
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
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

Image assets are stored in the `public/assets/` folder. Placeholder images have been created. See `public/assets/README.md` for details on what images are needed and how to replace the placeholders with your actual assets.

## Notes

- Image assets are now served from `/public/assets/` folder (placeholders created - replace with actual images)
- See `public/assets/README.md` for details on required images
- The site uses Geist font from Google Fonts
- Vite automatically serves files from the public folder

## License

All rights reserved © 2025 AGARI

