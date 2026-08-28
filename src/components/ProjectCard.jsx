import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './icons/BrandIcons.jsx'
import { StaggerGroup, StaggerItem } from './Stagger.jsx'

export default function ProjectCard({ project }) {
  return (
    <article className="hover-lift group flex flex-col gap-5 rounded-3xl border border-border bg-surface p-3 hover:border-border-strong sm:p-4">
      <Link
        to={`/projects/${project.slug}`}
        className="relative block overflow-hidden rounded-2xl"
        aria-label={`View details for ${project.title}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
      </Link>

      <div className="flex flex-col gap-3 px-2 pb-2 sm:px-1">
        <h3 className="section-heading text-xl text-ink sm:text-2xl">{project.title}</h3>
        <p className="text-sm leading-relaxed text-ink-dim sm:text-base">{project.description}</p>

        <StaggerGroup className="flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <StaggerItem
              key={tech}
              as="span"
              className="rounded-md border border-border bg-surface-2/70 px-2.5 py-1 text-xs font-medium text-ink-dim"
            >
              {tech}
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-1 flex flex-wrap items-center gap-3">
          <Link
            to={`/projects/${project.slug}`}
            className="btn-lift inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-canvas transition-colors hover:bg-ink/90"
          >
            View Details
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
              GitHub
            </a>
          )}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-2 py-2.5 text-sm font-medium text-ink-dim transition-colors hover:text-ink"
            >
              Live Demo
              <ArrowUpRight size={15} />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2/70 px-3 py-1.5 text-xs font-medium text-ink-faint">
              Coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
