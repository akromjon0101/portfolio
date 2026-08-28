import { Link } from 'react-router-dom'
import { ArrowUpRight, Globe } from 'lucide-react'
import { GithubIcon } from './icons/BrandIcons.jsx'
import { StaggerGroup, StaggerItem } from './Stagger.jsx'
import { useLang, useT } from '../i18n/index.jsx'

export default function ProjectCard({ project, wide = false }) {
  const t = useT()
  const { lang } = useLang()
  const c = project.content[lang] ?? project.content.en

  return (
    <article className="hover-lift group flex h-full flex-col gap-5 rounded-3xl border border-border bg-surface p-3 hover:border-border-strong sm:p-4">
      <Link
        to={`/projects/${project.slug}`}
        className="relative block overflow-hidden rounded-2xl"
        aria-label={c.title}
      >
        <div className={`relative overflow-hidden ${wide ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
          <img
            src={project.image}
            alt={`${c.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
          {project.demo && (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-canvas/75 px-2.5 py-1 text-xs font-semibold text-accent backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {t('projects.liveBadge')}
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 px-2 pb-2 sm:px-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h3 className="section-heading text-xl text-ink sm:text-2xl">{c.title}</h3>
          <span className="inline-flex items-center gap-1 font-mono text-xs text-ink-faint">
            <Globe size={12} /> {project.domain}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-ink-dim sm:text-base">{c.description}</p>

        <StaggerGroup className="flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((tech) => (
            <StaggerItem
              key={tech}
              as="span"
              className="rounded-md border border-border bg-surface-2/70 px-2.5 py-1 text-xs font-medium text-ink-dim"
            >
              {tech}
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
          <Link
            to={`/projects/${project.slug}`}
            className="btn-lift inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-canvas transition-colors hover:bg-ink/90"
          >
            {t('common.viewDetails')}
            <ArrowUpRight size={15} />
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-lift inline-flex items-center gap-1.5 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink-faint hover:bg-surface"
            >
              <GithubIcon size={15} />
              {t('common.github')}
            </a>
          )}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-2 py-2.5 text-sm font-medium text-ink-dim transition-colors hover:text-ink"
            >
              {t('common.liveDemo')}
              <ArrowUpRight size={15} />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2/70 px-3 py-1.5 text-xs font-medium text-ink-faint">
              {t('common.comingSoon')}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
