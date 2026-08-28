import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Globe } from 'lucide-react'
import { GithubIcon } from '../components/icons/BrandIcons.jsx'
import Footer from '../components/Footer.jsx'
import ScrollProgress from '../components/ScrollProgress.jsx'
import LanguageSwitcher from '../components/LanguageSwitcher.jsx'
import { getProjectBySlug } from '../data/projects.js'
import { useLang, useT } from '../i18n/index.jsx'

export default function ProjectDetails() {
  const { slug } = useParams()
  const t = useT()
  const { lang } = useLang()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="container-xl flex flex-1 flex-col items-center justify-center gap-6 py-32 text-center">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">{t('detail.notFoundTag')}</p>
          <h1 className="section-heading text-3xl text-ink sm:text-4xl">{t('detail.notFoundTitle')}</h1>
          <p className="max-w-md text-ink-dim">{t('detail.notFoundText')}</p>
          <Link
            to="/"
            className="btn-lift inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-canvas transition-colors hover:bg-ink/90"
          >
            <ArrowLeft size={16} /> {t('detail.backHome')}
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const c = project.content[lang] ?? project.content.en

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="relative z-10 min-h-screen"
    >
      <ScrollProgress />
      <header className="sticky top-0 z-40 border-b border-border bg-canvas/80 backdrop-blur-xl">
        <div className="container-xl flex h-16 items-center justify-between gap-4">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm font-medium text-ink-dim hover:text-ink">
            <ArrowLeft size={16} /> {t('detail.back')}
          </Link>
          <div className="flex items-center gap-4">
            <LanguageSwitcher compact />
            <Link to="/" className="hidden font-sans text-base font-extrabold tracking-tight text-ink sm:block">
              AKROM<span className="text-accent">.DEV</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container-xl py-14 sm:py-20">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{t('detail.caseStudy')}</span>
          <h1 className="section-heading text-4xl text-ink sm:text-5xl">{c.title}</h1>
          <p className="max-w-2xl text-lg text-ink-dim">{c.tagline}</p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-faint">
            <span className="inline-flex items-center gap-1.5">
              <Globe size={14} /> {project.domain}
            </span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <div className="mt-2 flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-lift inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink-faint hover:bg-surface"
              >
                <GithubIcon size={16} /> {t('detail.repository')}
              </a>
            )}
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn-lift inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-canvas transition-colors hover:bg-ink/90"
              >
                {t('detail.visitSite')} <ArrowUpRight size={15} />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/70 px-5 py-2.5 text-sm font-medium text-ink-faint">
                {t('common.comingSoon')}
              </span>
            )}
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-border">
          <img
            src={project.image}
            alt={`${c.title} main preview`}
            className="max-h-[540px] w-full object-cover object-top"
          />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="flex flex-col gap-12">
            <DetailBlock title={t('detail.overview')} text={c.overview} />
            <DetailBlock title={t('detail.role')} text={c.role} />
            <DetailBlock title={t('detail.problem')} text={c.problem} />
            <DetailBlock title={t('detail.solution')} text={c.solution} />

            <div>
              <h2 className="section-heading mb-4 text-xl text-ink sm:text-2xl">{t('detail.features')}</h2>
              <ul className="flex flex-col gap-3">
                {c.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-ink-dim">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <DetailBlock title={t('detail.challenges')} text={c.challenges} />

            {project.screenshots?.length > 0 && (
              <div>
                <h2 className="section-heading mb-4 text-xl text-ink sm:text-2xl">{t('detail.screenshots')}</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.screenshots.map((src, i) => (
                    <div key={src + i} className="overflow-hidden rounded-2xl border border-border">
                      <img
                        src={src}
                        alt={`${c.title} screenshot ${i + 1}`}
                        loading="lazy"
                        className="aspect-[16/10] w-full object-cover object-top"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="flex h-fit flex-col gap-6 rounded-2xl border border-border bg-surface/50 p-6 lg:sticky lg:top-24">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-ink-faint">
                {t('detail.technologies')}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-surface-2/70 px-3 py-1 text-xs font-medium text-ink-dim"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-lift inline-flex items-center justify-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink-faint hover:bg-surface"
                >
                  <GithubIcon size={16} /> {t('detail.viewCode')}
                </a>
              )}
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-lift inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-canvas transition-colors hover:bg-ink/90"
                >
                  {t('detail.visitSite')} <ArrowUpRight size={15} />
                </a>
              ) : (
                <span className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface-2/70 px-5 py-2.5 text-sm font-medium text-ink-faint">
                  {t('common.comingSoon')}
                </span>
              )}
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </motion.div>
  )
}

function DetailBlock({ title, text }) {
  if (!text) return null
  return (
    <div>
      <h2 className="section-heading mb-3 text-xl text-ink sm:text-2xl">{title}</h2>
      <p className="leading-relaxed text-ink-dim">{text}</p>
    </div>
  )
}
