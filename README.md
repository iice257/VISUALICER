# VISUALICER

VISUALICER is a play on the creator's name, **ICE**: a local-first lyric and audio visualizer built as a weekend single-page application.

The premise is intentionally simple. The implementation is about attention to every frontend detail—radial geometry, theme variants, typography, motion, responsive composition, accessible controls and local media lifecycle. Almost every visible part can be edited or tuned, creating a large number of unique combinations from a minimal interface.

It is designed for frequent use alongside ICE's **SSS project**.

## Highlights

- Local browser-supported audio, artwork, background images, lyrics and SRT captions
- Circular and horizontal seeking with mouse, touch and keyboard
- Twelve themes with individually curated dark and light palettes
- Independent title, UI and lyric fonts, including a distinctive Google Fonts catalog
- Configurable radial stroke count, placement, anchors and scanning effect
- Editable metadata, visibility, placement, time modes, pills and responsive layout
- Versioned browser-only persistence for text and settings
- No media uploads, accounts, APIs or build step

## Run locally

Open `index.html` directly or serve this folder with any static web server.

## Privacy

Audio, artwork, background images and lyric files remain on the current device. Only non-media preferences and entered text are stored in `localStorage`; use **Reset saved settings** or clear site data to remove them.

## Deployment

- Production: https://lyric-audio-visualizer.vercel.app
- Creator: https://github.com/iice257

The project is static and deploys from the repository root on Vercel without a build command.

## Release notes

### VISUALICER visual-system pass

- Rebuilt every theme as a complete curated light/dark pair
- Replaced seeker shimmer with configurable radial stroke effects
- Removed the circular and horizontal visual seek handles while retaining their tracks and interactions
- Added stroke density, placement, anchor, secondary-UI and bottom-bar controls
- Expanded typography with distinctive Google Fonts and font-preview theme cards
- Standardized editor hierarchy, iconography, radii and typography

### Persistence, accessibility, metadata and layout milestone

- Added safe versioned settings/text persistence and reset
- Added Info/About content and expanded metadata controls
- Corrected radial seeking, responsive mobile composition and reduced-motion behavior
