'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

// [bg, surface, text, dim, accent2] per mode, mirroring THEMES in public/visualizer.html.
type Palette = [string, string, string, string, string]
const themes: Record<string, { dark: Palette; light: Palette; font: string }> = {
  amber:{dark:["#0b0907", "#211811e8", "#f7ead8", "#a99580", "#52b9aa"],light:["#fff8ec", "#fffdf8e8", "#2b1b10", "#806b58", "#167d72"],font:'"DM Serif Display",Georgia,serif'},
  paper:{dark:["#171411", "#2d2822e8", "#f7f0e5", "#b4a99a", "#6ea091"],light:["#ffffff", "#fffdf9ee", "#201b16", "#746b61", "#356e62"],font:'Borel,cursive'},
  slate:{dark:["#0c1218", "#1d2934e8", "#edf5fb", "#93a6b6", "#75d8c7"],light:["#eef4f8", "#f8fbfcee", "#17232d", "#647887", "#188675"],font:'"Hanken Grotesk",Arial,sans-serif'},
  mono:{dark:["#090909", "#222222ec", "#f1f1f1", "#9f9f9f", "#888888"],light:["#fafafa", "#ffffffee", "#111111", "#686868", "#777777"],font:'Unbounded,Arial,sans-serif'},
  heaven:{dark:["#14120f", "#30291ee8", "#fff9ea", "#bdb29c", "#86bbae"],light:["#fffefb", "#ffffffed", "#403829", "#8b7d67", "#4b9183"],font:'Gruppo,Arial,sans-serif'},
  miami:{dark:["#10051f", "#28133fe8", "#fff1ff", "#c9a8d9", "#48e1e8"],light:["#fff2ff", "#fff8ffee", "#3b174d", "#8a629d", "#087f91"],font:'Righteous,Arial,sans-serif'},
  inferno:{dark:["#000000", "#220000ef", "#fff1ef", "#ff8881", "#ff4b1f"],light:["#fff4f0", "#fff9f5ef", "#370600", "#a63b2f", "#e94816"],font:'Algerian,"Uncial Antiqua",serif'},
  matrix:{dark:["#020805", "#0c1c11ed", "#d9ffe0", "#72aa7e", "#c5ff42"],light:["#effff1", "#f7fff8ef", "#0a3213", "#477653", "#6fa500"],font:'"Pixelify Sans",ui-monospace,monospace'},
  coastal:{dark:["#07171b", "#173c43eb", "#e6fbff", "#8fb6bd", "#f0aa62"],light:["#f2feff", "#fbffffef", "#163b43", "#66868c", "#d88432"],font:'Abel,Arial,sans-serif'},
  blush:{dark:["#1d0d12", "#41232ceb", "#ffedf1", "#c99ca8", "#7fb0a8"],light:["#fff8fa", "#fffdfdef", "#4b2932", "#946d77", "#4d8b82"],font:'"Cedarville Cursive",cursive'},
  violet:{dark:["#11091b", "#2e1c42eb", "#faefff", "#bca2ce", "#ff8fd2"],light:["#fbf5ff", "#fffaffef", "#321b43", "#826895", "#cf4d9d"],font:'"Avenir Next","Century Gothic",sans-serif'},
  citrus:{dark:["#0b1105", "#263417eb", "#f4ffd7", "#abbc7a", "#ff9f1c"],light:["#fdffef", "#fffff7ef", "#29380e", "#708044", "#dc7511"],font:'Arial,"Arial Black",sans-serif'},
  arcade:{dark:["#07050d", "#211438eb", "#fff4ff", "#b9a1c9", "#80fff4"],light:["#fff7ff", "#fffaffef", "#32183f", "#896a95", "#088c84"],font:'"Rubik Glitch Pop",system-ui'},
  heritage:{dark:["#100b05", "#32240deb", "#fff1c7", "#c6a96c", "#fff0a6"],light:["#fffaf0", "#fffdf5ef", "#3b2a0b", "#8b7544", "#6c5200"],font:'"Sankofa Display",serif'},
  storybook:{dark:["#150b12", "#3e2131eb", "#fff0f7", "#c5a2b5", "#ffd36a"],light:["#fff8fb", "#fffdfdef", "#482236", "#90677c", "#b77a00"],font:'"Fontdiner Swanky",serif'},
  imperial:{dark:["#130812", "#35172feb", "#fff0fa", "#c69ab9", "#ffd36e"],light:["#fff7fc", "#fffdfdef", "#49203c", "#91677f", "#b27b00"],font:'"Imperial Script",cursive'},
}

function toStyle(id: string, mode: 'dark' | 'light'): React.CSSProperties {
  const theme=themes[id]||themes.matrix
  const [bg,surface,text,dim,accent2]=theme[mode]
  return { '--bg':bg,'--surface':surface,'--text':text,'--dim':dim,'--accent2':accent2,'--about-font':theme.font } as React.CSSProperties
}

export default function AboutPage() {
  const [style,setStyle] = useState<React.CSSProperties>(()=>toStyle('matrix','dark'))
  useEffect(()=>{
    try {
      const saved=JSON.parse(localStorage.getItem('lyric-visualizer-settings-v3')||'{}')?.settings||{}
      const mode=saved.mode==='light'||(saved.mode==='auto'&&matchMedia('(prefers-color-scheme: light)').matches)?'light':'dark'
      setStyle(toStyle(saved.theme,mode))
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
