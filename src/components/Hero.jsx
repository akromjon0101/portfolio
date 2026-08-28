import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { GithubIcon } from './icons/BrandIcons.jsx'
import { profile, stats } from '../data/config.js'
import CircularScrollCTA from './shell/CircularScrollCTA.jsx'

export default function Hero() {
  const sectionRef = useRef(null)
  const spotlightRef = useRef(null)

  // A very soft cursor-follow highlight, desktop pointer devices only.
  // Skipped entirely for touch and for prefers-reduced-motion.
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (prefersReduced || !canHover) return

    const section = sectionRef.current
    const spotlight = spotlightRef.current
    if (!section || !spotlight) return

    const handleMove = (e) => {
      const rect = section.getBoundingClientRect()
      spotlight.style.setProperty('--x', `${e.clientX - rect.left}px`)
      spotlight.style.setProperty('--y', `${e.clientY - rect.top}px`)
      spotlight.style.opacity = '1'
    }
    const handleLeave = () => {
      spotlight.style.opacity = '0'
    }

    section.addEventListener('mousemove', handleMove)
    section.addEventListener('mouseleave', handleLeave)
    return () => {
      section.removeEventListener('mousemove', handleMove)
      section.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-30" />
      <div
        ref={spotlightRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-300 lg:block"
        style={{
          background:
            'radial-gradient(480px circle at var(--x, 50%) var(--y, 50%), rgba(52,224,138,0.06), transparent 70%)',
        }}
      />

      <div className="container-xl relative">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-ink-dim"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            Available for freelance &amp; development opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="section-heading mt-6 text-[2.4rem] leading-[1.1] text-ink sm:text-5xl lg:text-6xl"
          >
            Building digital <span className="text-accent">experiences</span> that
            solve real problems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-dim"
          >
            I design and build modern, scalable web applications — from the
            interface down to the APIs behind it. Currently running Harvard
            School in production and building an AI-powered IELTS platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="btn-lift group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-canvas transition-colors hover:bg-ink/90"
            >
              View My Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="btn-lift inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink-faint hover:bg-surface"
            >
              Let&apos;s Work Together
            </a>
          </motion.div>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink-faint transition-colors hover:text-ink-dim"
          >
            <GithubIcon size={16} />
            @{profile.github.split('/').pop()}
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mt-16 flex flex-wrap gap-x-12 gap-y-6"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="section-heading text-3xl text-accent sm:text-4xl">
                  {stat.value}
                  {stat.suffix}
                </span>
                <span className="max-w-[10rem] text-xs uppercase tracking-wide text-ink-faint">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute right-6 top-1/2 hidden -translate-y-1/2 xl:block"
        >
          <CircularScrollCTA label="My Projects" targetId="projects" />
        </motion.div>
      </div>
    </section>
  )
}
