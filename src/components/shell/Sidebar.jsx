import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TelegramIcon } from '../icons/BrandIcons.jsx'
import { profile } from '../../data/config.js'

const socials = [
  { icon: GithubIcon, href: profile.github, label: 'GitHub' },
  { icon: LinkedinIcon, href: profile.linkedin, label: 'LinkedIn' },
  { icon: TelegramIcon, href: profile.telegram, label: 'Telegram' },
]

// Fixed profile card, desktop only (lg+) — stays in view while the main
// column scrolls past it, like a persistent business card.
export default function Sidebar() {
  return (
    <aside className="fixed left-6 top-6 z-30 hidden w-[300px] flex-col gap-6 rounded-2xl border border-border bg-surface p-6 lg:flex xl:w-[320px]">
      <div className="flex items-center gap-3">
        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-gradient-to-br from-surface-2 to-surface">
          <span className="font-sans text-lg font-extrabold text-accent/80">A</span>
        </div>
        <div className="flex min-w-0 flex-col">
          <span className="truncate font-sans text-base font-extrabold tracking-tight text-ink">
            AKROM<span className="text-accent">.DEV</span>
          </span>
          <span className="truncate text-xs text-ink-faint">{profile.role}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 rounded-xl border border-border bg-surface-2/50 px-4 py-3">
        <span className="inline-flex items-center gap-2 text-xs font-medium text-ink-dim">
          <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-accent" />
          Available for freelance work
        </span>
        <span className="text-xs text-ink-faint">
          Currently running Harvard School in production, building the AI IELTS platform.
        </span>
      </div>

      <div className="flex flex-col gap-1 text-sm">
        <a href={`mailto:${profile.email}`} className="font-medium text-ink transition-colors hover:text-accent">
          {profile.email}
        </a>
        <span className="text-ink-faint">Based in {profile.location}</span>
      </div>

      <p className="text-xs text-ink-faint">© 2026 {profile.name}. All rights reserved.</p>

      <div className="flex items-center gap-2">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-dim transition-colors hover:border-border-strong hover:text-ink"
          >
            <Icon size={15} />
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="btn-lift flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
      >
        <Mail size={16} />
        Let&apos;s Talk
      </a>
    </aside>
  )
}
