# AGARI Assets

This folder contains all the image assets used in the AGARI website, downloaded from the Figma design.

## Images in this folder

### PNG Images

1. **graphic-strip.png** - Decorative strip graphic used as background pattern (788.5px × 144.5px, tiled)
2. **africa-cdc-logo.png** - Africa CDC (Centers for Disease Control and Prevention) logo
3. **aslm-logo.png** - ASLM (African Society for Laboratory Medicine) logo
4. **map.png** - Map of Africa showing genomic data coverage and distribution

### SVG Files

#### Logo Components
- **logo-symbol-small.svg** - AGARI logo symbol for small size (32px height)
- **logo-text-small.svg** - "AGARI" text logo for small size
- **logo-symbol-large.svg** - AGARI logo symbol for large size (95px height)
- **logo-text-large.svg** - "AGARI" text logo for large size

#### Icons
- **play-icon.svg** - Play button icon for "Watch Overview Video"
- **governance-icon.svg** - Illustration for Governance & Access section
- **upload-icon.svg** - Upload icon (Lucide style)
- **share-icon.svg** - Share icon for data sharing feature
- **explore-icon.svg** - Explore/search icon for data exploration
- **download-icon.svg** - Download icon for dataset downloads

## Source

All images were exported from the Figma design file and are the actual production assets.

## Usage

These images are referenced in `/src/App.jsx` with paths like `/assets/image-name.png` or `/assets/icon-name.svg`. Vite automatically serves files from the `public` folder at the root path.

## Notes

- PNG images are for photos, logos with complex graphics, and background patterns
- SVG files are for icons and vector graphics that need to scale cleanly
- All images are optimized for web use
- Logo components come in small and large variants for different display contexts
