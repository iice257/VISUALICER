# VISUALICER

A play on my own name, **ICE**: a local-first lyric and audio visualizer, built over one weekend as a single-page app.

The idea is simple: press play, watch a ring track the song, let lyrics rise and fall in time. Everything underneath that got tuned by hand: radial geometry, theme variants, typography, motion, responsive layout, accessible controls, how local media gets held and released. Almost every visible piece can be adjusted, and I kept adjusting until the interface felt smaller than what it can actually do.

I built it to sit next to SSS and get opened constantly, which is the only test I care about for something like this.

## Highlights

- Local browser-supported audio, artwork, background images, lyrics and SRT captions
- Circular and horizontal seeking with mouse, touch and keyboard
- Sixteen themes, each with an individually curated dark and light palette
- Independent title, UI and lyric fonts, including a distinctive Google Fonts catalog
- Configurable radial stroke count, placement, anchors and scanning effect
- Editable metadata, visibility, placement, time modes, pills and responsive layout
- Versioned browser-only persistence for text and settings
- No media uploads, accounts or APIs

## Privacy

Your audio, artwork, background images and lyric files stay on your device. The only things I store are non-media preferences and entered text, kept in `localStorage` until you reset settings or clear site data.

## Deployment

- Production: [https://lyric-audio-visualizer.vercel.app](https://lyric-audio-visualizer.vercel.app)
- Creator: [https://github.com/iice257](https://github.com/iice257)

The project uses Next.js App Router and deploys from the repository root on Vercel.

## Development

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Release notes

### Visual-system pass

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
