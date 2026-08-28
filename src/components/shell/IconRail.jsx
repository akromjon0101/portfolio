import { Home, User, Briefcase, Layers, Gauge, LayoutGrid, Mail } from 'lucide-react'
import { navSections } from '../../data/navSections.js'
import { useT } from '../../i18n/index.jsx'
import useScrollSpy from '../../hooks/useScrollSpy.js'

const iconMap = { Home, User, Briefcase, Layers, Gauge, LayoutGrid, Mail }
const ids = navSections.map((s) => s.id)

// Fixed vertical icon nav, desktop only (lg+) — a real scrollspy, not
// decorative: the icon for whichever section is in view lights up.
export default function IconRail() {
  const t = useT()
  const activeId = useScrollSpy(ids)

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-1 rounded-full border border-border bg-surface p-2 lg:flex"
    >
      {navSections.map(({ id, icon }) => {
        const Icon = iconMap[icon]
        const isActive = id === activeId
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-label={t(`nav.${id}`)}
            aria-current={isActive ? 'true' : undefined}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 ${
              isActive ? 'bg-accent-soft text-accent' : 'text-ink-faint hover:text-ink-dim'
            }`}
          >
            <Icon size={17} />
          </a>
        )
      })}
    </nav>
  )
}
