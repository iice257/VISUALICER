'use client'

import type { SyntheticEvent } from 'react'

export function VisualizerClient() {
  const connectAppRoutes = (event: SyntheticEvent<HTMLIFrameElement>) => {
    const frame = event.currentTarget
    const readMore = frame.contentDocument?.querySelector<HTMLAnchorElement>('#infoPanel a')
    if (readMore) {
      readMore.href = '/about'
      readMore.target = '_top'
    }
  }

  return (
    <iframe
      className="visualizer-shell"
      src="/visualizer.html"
      title="VISUALICER lyric and audio visualizer"
      allow="autoplay"
      onLoad={connectAppRoutes}
    />
  )
}
