import { useEffect, useRef, useState } from 'react'

const PHRASES = [
  'ethical hackers.',
  'CTF competitors.',
  'penetration testers.',
  'security researchers.',
  'bug bounty hunters.',
]

export default function Hero() {
  const canvasRef = useRef(null)
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  // Matrix rain
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>/\\|~`'
    const size = 13
    let cols = Math.floor(canvas.width / size)
    let drops = Array(cols).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(5,5,5,0.06)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      cols = Math.floor(canvas.width / size)
      while (drops.length < cols) drops.push(Math.random() * 50)

      for (let i = 0; i < cols; i++) {
        const opacity = Math.random() > 0.5 ? 1 : 0.4
        ctx.fillStyle = `rgba(0,255,65,${opacity})`
        ctx.font = `${size}px JetBrains Mono, monospace`
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * size, drops[i] * size)
        if (drops[i] * size > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      }
    }

    const id = setInterval(draw, 40)
    return () => { clearInterval(id); window.removeEventListener('resize', resize) }
  }, [])

  // Typewriter
  useEffect(() => {
    const phrase = PHRASES[phraseIdx]
    let i = 0
    setDisplayed('')
    setTyping(true)
    const typeId = setInterval(() => {
      setDisplayed(phrase.slice(0, i + 1))
      i++
      if (i >= phrase.length) {
        clearInterval(typeId)
        setTyping(false)
        setTimeout(() => {
          let d = phrase.length
          const delId = setInterval(() => {
            setDisplayed(phrase.slice(0, d - 1))
            d--
            if (d <= 0) {
              clearInterval(delId)
              setPhraseIdx(p => (p + 1) % PHRASES.length)
            }
          }, 40)
        }, 2000)
      }
    }, 80)
    return () => clearInterval(typeId)
  }, [phraseIdx])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Matrix canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-20" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-[#050505]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80" />

      {/* Center vignette glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-cyber-green/5 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Terminal prompt */}
        <div className="inline-flex items-center gap-2 font-mono text-xs text-cyber-green/70 bg-[#0d0d0d]/80 border border-[#1a1a1a] rounded px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
          root@cyberstore:~# loading arsenal...
        </div>

        {/* Glitch headline */}
        <h1
          className="glitch font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white mb-4 leading-none"
          data-text="CYBER STORE"
        >
          <span className="neon-green text-cyber-green">CYBER</span>{' '}
          <span className="text-white">STORE</span>
        </h1>

        {/* Typewriter subtitle */}
        <p className="font-mono text-lg sm:text-2xl text-[#888] mt-6 mb-3 h-8">
          Built for{' '}
          <span className="text-cyber-cyan neon-cyan">
            {displayed}
          </span>
          {typing && <span className="animate-blink text-cyber-green">_</span>}
        </p>

        <p className="text-[#555] text-base max-w-xl mx-auto mb-10 font-mono text-sm leading-relaxed">
          Premium courses, tools, and scripts to level up your offensive security skills.
          Zero fluff. Maximum impact.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#products"
            className="group relative inline-flex items-center gap-2 bg-cyber-green text-black font-bold font-mono px-8 py-3.5 rounded text-sm tracking-widest uppercase hover:bg-cyber-green/90 transition-all duration-200 animate-pulse-green"
          >
            <span>Browse Arsenal</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-2 border border-[#333] text-[#888] font-mono px-8 py-3.5 rounded text-sm tracking-widest uppercase hover:border-cyber-green/40 hover:text-cyber-green transition-all duration-200"
          >
            View Courses
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#333]">
          <span className="font-mono text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-cyber-green/50 to-transparent animate-float" />
        </div>
      </div>
    </section>
  )
}
