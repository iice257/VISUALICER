'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const presets: Record<string,[string,string,string,string,string,string]> = {
  matrix:['#020805','#0c1c11','#d9ffe0','#46e568','#c5ff42','Pixelify Sans'],
  amber:['#0b0907','#211811','#f7ead8','#e96b42','#52b9aa','DM Serif Display'],
  inferno:['#000','#220000','#fff1ef','#ef1010','#ff4b1f','Algerian'],
}

export default function AboutPage() {
  const [style,setStyle] = useState<React.CSSProperties>({ '--bg':'#020805','--surface':'#0c1c11','--text':'#d9ffe0','--dim':'#8fb997','--accent2':'#c5ff42','--about-font':'Pixelify Sans' } as React.CSSProperties)
  useEffect(()=>{
    try {
      const saved=JSON.parse(localStorage.getItem('lyric-visualizer-settings-v3')||'{}')
      const p=presets[saved.settings?.theme]||presets.matrix
      setStyle({ '--bg':p[0],'--surface':p[1],'--text':p[2],'--dim':`${p[2]}aa`,'--accent2':p[4],'--about-font':p[5] } as React.CSSProperties)
    } catch { /* keep Matrix defaults */ }
  },[])
  return <><link rel="stylesheet" href="/fonts/local-fonts.css"/><div className="about-body" style={style}><main className="about-main">
    <Link className="back" href="/"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg><span>Back to home</span></Link>
    <h1>VISUALICER</h1>
    <p className="lead">Press play. A ring closes around your song, one full turn for every pass through the track. The art sits at its center like something orbited rather than displayed. If you&apos;ve got lyrics timed to the second, they surface exactly when they should and disappear just as quietly.</p>
    <div className="about-card">
      <p>That&apos;s the whole idea, until you start touching things. I built more in here than the interface lets on: a different font changes how the whole page breathes, a new stroke weight on the ring changes how urgent the song feels, colors shift mood more than a slider should be able to. Finding the combination that feels right is most of the fun, and it was most of the fun for me too.</p>
      <p>Nothing you load ever leaves the tab. No upload bar, no spinner waiting on a server, because I didn&apos;t build a server for it to wait on. Your track and your art stay exactly where you dropped them. What sticks around between visits is smaller: a theme, a font, where you left off in the song, held in this browser until you clear it yourself.</p>
      <p>I couldn&apos;t stop adjusting things while I built this: kerning, easing curves, what happens when you tab through the controls instead of clicking. Most of it you&apos;ll never consciously notice. You&apos;ll just feel like nothing here was left on default.</p>
      <p>I built it to sit next to SSS and get used constantly, which is really the only test I care about for something like this. Open it locally, load a file, and it&apos;s yours.</p>
      <h2>Quick start</h2><ol><li>Open Edit, choose your audio.</li><li>Add artwork, metadata, lyrics if you&apos;ve got them.</li><li>Pick a theme, mode, font, stroke.</li><li>Play, seek, tune. It remembers.</li></ol>
      <h2>Creator</h2><p><a href="https://github.com/iice257">ICE / iice257</a></p>
    </div>
  </main></div></>
}
