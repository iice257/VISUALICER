# Lyric & Audio Visualizer Tool

A private, in-browser music visualizer with radial progress, local artwork, and optional synchronized lyrics.

## Use it

Open `index.html` in a modern browser, select **Edit**, and attach an audio file. Add a background or centre image, paste lyrics, or load an `.srt` file for timed captions.

All media stays in the browser. The tool never uploads selected audio, image, or lyric files.

## Included polish

- Remembers display preferences, text, colours, blur, lyrics, and playback position locally.
- Releases replaced file object URLs to avoid accumulating browser memory during repeated uploads.
- Supports keyboard play/pause and seeking from both the turntable and the mini timeline.
- Announces load and playback failures to assistive technology.

## Local development

No build step or dependencies are required. Serve the folder with any static file server, or open `index.html` directly.

## Privacy note

Browser local storage can retain the lyric text and settings on this device until browser site data is cleared. Media files themselves are not persisted.
