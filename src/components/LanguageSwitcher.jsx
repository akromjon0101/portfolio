import { Globe } from 'lucide-react'
import { useLang, useT, LANGS } from '../i18n/index.jsx'

// Segmented EN / UZ / RU control. `compact` drops the globe icon for tight
// spots (mobile top bar); the full version is used in the sidebar.
export default function LanguageSwitcher({ compact = false }) {
  const { lang, setLang } = useLang()
  const t = useT()

  return (
    <div
      role="group"
      aria-label={t('common.langLabel')}
      className="inline-flex items-center gap-1 rounded-full border border-border bg-surface p-1"
    >
      {!compact && <Globe size={13} className="ml-1.5 mr-0.5 text-ink-faint" aria-hidden="true" />}
      {LANGS.map(({ code, label, name }) => {
        const active = code === lang
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            aria-label={name}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
              active ? 'bg-accent text-accent-ink' : 'text-ink-faint hover:text-ink-dim'
            }`}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
