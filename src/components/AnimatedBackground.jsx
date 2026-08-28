import { useEffect, useRef } from 'react'

// A very subtle, site-wide animated backdrop: a slow-drifting network of
// dots that connect when close, in the accent color. Stands in for a real
// background video (none was available) without competing with the
// content that sits on top of it everywhere on the page.
//
// - Fixed, full-viewport, behind all content (see the `relative z-10`
//   wrapper on each page root that guarantees it stays behind).
// - Skips entirely under prefers-reduced-motion, and pauses while the tab
//   is hidden, so it never becomes a distraction or a battery drain.
export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const accent =
      getComputedStyle(document.documentElement).getPropertyValue('--color-accent').trim() || '#34e08a'

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let particles = []
    let rafId = null

    function hexToRgb(hex) {
      const m = hex.replace('#', '')
      const bigint = parseInt(m.length === 3 ? m.split('').map((c) => c + c).join('') : m, 16)
      return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255]
    }
    const [r, g, b] = hexToRgb(accent)

    function makeParticles() {
      // Roughly one particle per ~16,000px² of viewport, clamped to a
      // sane range so it stays light on very large or very small screens.
      const count = Math.max(24, Math.min(70, Math.round((width * height) / 16000)))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
      }))
    }

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      makeParticles()
    }

    function tick() {
      rafId = requestAnimationFrame(tick)
      // requestAnimationFrame is already throttled by the browser in a
      // hidden tab; skip the actual draw work too so it costs nothing.
      if (document.hidden) return

      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
      }

      const linkDistance = 140
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.hypot(dx, dy)
          if (dist < linkDistance) {
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${0.12 * (1 - dist / linkDistance)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.45)`
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    resize()
    tick()
    window.addEventListener('resize', resize)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-60"
    />
  )
}
