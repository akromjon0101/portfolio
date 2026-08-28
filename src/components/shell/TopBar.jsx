import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Home, User, Briefcase, Layers, Gauge, LayoutGrid, Mail, Menu, X, FileDown } from 'lucide-react'
import { GithubIcon } from '../icons/BrandIcons.jsx'
import { navSections } from '../../data/navSections.js'
import { profile } from '../../data/config.js'
import { useT } from '../../i18n/index.jsx'
import LanguageSwitcher from '../LanguageSwitcher.jsx'
import useScrollSpy from '../../hooks/useScrollSpy.js'

const iconMap = { Home, User, Briefcase, Layers, Gauge, LayoutGrid, Mail }
const ids = navSections.map((s) => s.id)

// The one nav element present at every breakpoint: a pill on the left
// (current section on desktop, wordmark on mobile) and a hamburger on the
// right that opens the full link list — the sidebar/rail cover desktop
// navigation visually, but the overlay is the actual keyboard/mobile path.
export default function TopBar() {
  const t = useT()
  const [open, setOpen] = useState(false)
  const activeId = useScrollSpy(ids)
  const active = navSections.find((s) => s.id === activeId) ?? navSections[0]
  const ActiveIcon = iconMap[active.icon]

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <div className="lg:ml-[336px] xl:ml-[356px]">
          <a
            href="#home"
            className="font-sans text-base font-extrabold tracking-tight text-ink lg:hidden"
          >
            AKROM<span className="text-accent">.DEV</span>
          </a>
          <span className="hidden items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium uppercase tracking-wide text-ink-dim lg:inline-flex">
            <ActiveIcon size={13} className="text-accent" />
            {t(`nav.${active.id}`)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="lg:hidden">
            <LanguageSwitcher compact />
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t('common.closeMenu') : t('common.openMenu')}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors hover:border-border-strong lg:mr-24"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-canvas/95 backdrop-blur-xl"
          >
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              aria-label="Primary"
              className="container-xl flex h-full flex-col items-center justify-center gap-2"
            >
              {navSections.map((section) => {
                const Icon = iconMap[section.icon]
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-2xl font-semibold text-ink-dim transition-colors hover:text-ink"
                  >
                    <Icon size={20} className="text-accent" />
                    {t(`nav.${section.id}`)}
                  </a>
                )
              })}

              <div className="mt-8 flex items-center gap-3">
                <LanguageSwitcher />
              </div>

              <div className="mt-2 flex items-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-ink"
                >
                  <GithubIcon size={16} /> GitHub
                </a>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-canvas"
                >
                  <FileDown size={16} /> {t('common.resume')}
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
