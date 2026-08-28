import { Heart } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TelegramIcon } from './icons/BrandIcons.jsx'
import { profile } from '../data/config.js'

const socials = [
  { icon: GithubIcon, href: profile.github, label: 'GitHub' },
  { icon: LinkedinIcon, href: profile.linkedin, label: 'LinkedIn' },
  { icon: TelegramIcon, href: profile.telegram, label: 'Telegram' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-xl flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <p className="text-sm text-ink-faint">© 2026 Akrom. All rights reserved.</p>

        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-dim transition-colors hover:border-border-strong hover:text-ink"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p className="flex items-center gap-1.5 text-sm text-ink-faint">
          Built with React &amp; <Heart size={14} className="fill-accent text-accent" />
        </p>
      </div>
    </footer>
  )
}
