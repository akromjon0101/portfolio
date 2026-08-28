import { GitCommitHorizontal, FolderGit2, Users, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './icons/BrandIcons.jsx'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { profile, githubStats } from '../data/config.js'
import { useT } from '../i18n/index.jsx'

// Deterministic pseudo-random contribution intensities so the graph looks
// alive without needing a live GitHub API call.
function buildContributionGrid(weeks = 26, days = 7) {
  const cells = []
  let seed = 42
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }
  for (let w = 0; w < weeks; w++) {
    for (let d = 0; d < days; d++) {
      cells.push(Math.floor(rand() * 5))
    }
  }
  return cells
}

const levelColor = [
  'bg-surface-2',
  'bg-border-strong',
  'bg-ink-faint',
  'bg-ink-dim',
  'bg-accent',
]

const statCards = [
  { icon: FolderGit2, labelKey: 'github.repos', value: githubStats.repos },
  { icon: GitCommitHorizontal, labelKey: 'github.contributions', value: githubStats.contributions },
  { icon: Users, labelKey: 'github.followers', value: githubStats.followers },
]

export default function GithubSection() {
  const t = useT()
  const cells = buildContributionGrid()

  return (
    <section className="relative py-28 md:py-36">
      <div className="container-xl">
        <SectionHeading
          align="center"
          eyebrow={t('github.eyebrow')}
          title={t('github.title')}
          subtitle={t('github.subtitle')}
        />

        <Reveal delay={0.1} className="mt-16 overflow-hidden rounded-3xl border border-border bg-surface/50 p-6 sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface-2">
                <GithubIcon size={22} className="text-ink" />
              </span>
              <div>
                <p className="font-semibold text-ink">@{githubStats.username}</p>
                <p className="text-sm text-ink-dim">{t('github.tagline')}</p>
              </div>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn-lift inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-canvas transition-colors hover:bg-ink/90"
            >
              {t('github.view')}
              <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
            {statCards.map(({ icon: Icon, labelKey, value }) => (
              <div
                key={labelKey}
                className="hover-lift flex flex-col items-center gap-2 rounded-2xl border border-border bg-surface-2/50 py-6 text-center hover:border-border-strong sm:items-start sm:px-6"
              >
                <Icon size={18} className="text-accent" />
                <span className="section-heading text-2xl text-ink sm:text-3xl">{value}+</span>
                <span className="text-xs text-ink-dim sm:text-sm">{t(labelKey)}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 overflow-x-auto pb-2">
            <div className="grid w-max grid-flow-col grid-rows-7 gap-1">
              {cells.map((level, i) => (
                <span
                  key={i}
                  className={`h-3 w-3 rounded-[3px] ${levelColor[level]}`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
          <p className="mt-3 text-xs text-ink-faint">{t('github.note')}</p>
        </Reveal>
      </div>
    </section>
  )
}
