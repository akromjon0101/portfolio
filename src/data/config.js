// Site-wide configuration: personal info, social links and headline stats.
// User-facing strings (stat labels, timeline copy) live in ../i18n/dictionary.js
// and are matched to these entries by `key` / array order.

export const profile = {
  name: 'Akromjon',
  fullBrand: 'AKROM.DEV',
  roleKey: 'common.role',
  email: 'akromjontoshpulatov0101@gmail.com',
  github: 'https://github.com/akromjon0101',
  linkedin: 'https://www.linkedin.com/in/akromjon-toshpulatov-91035b253/',
  telegram: 'https://t.me/akromjontoshpulatov',
  resumeUrl: '/cv.png',
}

// `labelKey` resolves against the i18n dictionary (see <Hero />).
export const stats = [
  { key: 'projects', labelKey: 'stats.projects', value: 12, suffix: '+' },
  { key: 'years', labelKey: 'stats.years', value: 3, suffix: '+' },
  { key: 'tech', labelKey: 'stats.tech', value: 12, suffix: '+' },
  { key: 'passion', labelKey: 'stats.passion', value: 100, suffix: '%' },
]

// Only the year lives here; title/org/description come from
// dictionary[lang].experience.items in the same order.
export const timeline = [{ year: '2024' }, { year: '2025' }, { year: '2026' }]

export const githubStats = {
  username: 'akromjon0101',
  repos: 24,
  contributions: 640,
  followers: 30,
}
