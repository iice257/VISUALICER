# Lyric & Audio Visualizer

A local-first, single-file radial player for browser-supported audio, artwork, plain lyrics and SRT captions.

## Features

- Circular and horizontal seeking with mouse, touch and keyboard
- Twelve named themes, independent light/dark mode and curated local font stacks
- Title, artist, album, lyrics, placement, visibility and pill controls
- Versioned browser-only persistence for text and settings; uploaded media is never persisted or sent anywhere
- Responsive split mobile layout, visible focus states and reduced-motion support

## Run locally

Open `index.html` directly, or serve this folder with any static web server. No install, build step, account or API key is required.

## Privacy

Audio, artwork, background images and lyric files stay on the current device. Only non-media preferences and entered text are saved in `localStorage`; use **Reset saved settings** or clear site data to remove them.

## Deployment

The project is static and deploys from the repository root on Vercel with no build command.

- Production: https://lyric-audio-visualizer.vercel.app
- Repository: https://github.com/iice257/Lyric-Audio-Visualizer-Tool

## Release notes

### Persistence, accessibility, metadata and layout milestone

- Added safe versioned settings/text persistence and reset
- Added Info/About content and expanded metadata controls
- Added twelve compact themes, a black/red Inferno special theme, appearance mode and a broader font catalog
- Corrected radial anchors, handle alignment semantics and intentional mobile composition
- Refined editor controls, local media lifecycle, keyboard behavior and status announcements

A private, single-file music visualizer with radial and horizontal seeking, local artwork, named themes, independent typography, configurable layouts, and plain-text or SRT lyrics.

Open `index.html` directly in a modern browser. No build step or network connection is required.

All selected audio, images, and lyric files remain local to the browser. Object URLs are revoked when a file is replaced or the page genuinely unloads; settings may be retained in browser local storage.

## Controls

- Use the centre play button or bottom control to play and pause.
- Drag the centre disc, artwork, circular trail, handle, or radial ticks to seek.
- Click or drag the horizontal bar; arrow keys seek by five seconds and Shift+arrow seeks by fifteen.
- Tap either visible time display to cycle elapsed/total and remaining time.
- Open **Edit** for themes, fonts, seeker effects, layout, visibility, time modes, and local media.
