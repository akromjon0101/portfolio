import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Resets scroll position on route change so project detail pages always
// open at the top instead of preserving the home-page scroll offset, while
// still honoring an in-page hash like /#projects coming back from a link.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
