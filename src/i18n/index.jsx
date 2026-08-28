import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { dictionary, LANGS } from './dictionary.js'

// Lightweight i18n: one context holds the active language, useT() returns a
// dotted-path lookup helper with English fallback. No external dependency.

const STORAGE_KEY = 'akrom.lang'
const SUPPORTED = LANGS.map((l) => l.code)

const LanguageContext = createContext({ lang: 'en', setLang: () => {} })

function readInitialLang() {
  if (typeof window === 'undefined') return 'en'
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved && SUPPORTED.includes(saved)) return saved
  } catch {
    /* localStorage unavailable — fall through */
  }
  const browser = (navigator.language || 'en').slice(0, 2).toLowerCase()
  return SUPPORTED.includes(browser) ? browser : 'en'
}

function resolve(obj, path) {
  return path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), obj)
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore write failure */
    }
  }, [lang])

  const setLang = useCallback((next) => {
    if (SUPPORTED.includes(next)) setLangState(next)
  }, [])

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  return useContext(LanguageContext)
}

// t('hero.badge') → string for the current language, English fallback,
// and the key itself as a last resort so a missing string is obvious.
// t('experience.items') → array/object, same fallback rules.
export function useT() {
  const { lang } = useLang()
  return useCallback(
    (path) => {
      const hit = resolve(dictionary[lang], path)
      if (hit !== undefined) return hit
      const fallback = resolve(dictionary.en, path)
      return fallback !== undefined ? fallback : path
    },
    [lang],
  )
}

export { LANGS }
