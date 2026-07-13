import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'VISUALICER', template: '%s | VISUALICER' },
  description: 'A local-first lyric and audio visualizer built for deep visual customization.',
  metadataBase: new URL('https://lyric-audio-visualizer.vercel.app'),
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
  openGraph: {
    type: 'website',
    title: 'VISUALICER',
    description: 'A local-first lyric and audio visualizer built for deep visual customization.',
    images: [{ url: '/assets/visualicer-preview.png', width: 1679, height: 944 }],
  },
  twitter: { card: 'summary_large_image', title: 'VISUALICER', images: ['/assets/visualicer-preview.png'] },
}

export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
