import { useEffect, useState } from 'react'

// Tracks which section id currently sits in the vertical center band of the
// viewport. Pass a stable (module-level) ids array — a new array literal on
// every render would re-subscribe the observer needlessly.
export default function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [ids])

  return activeId
}
