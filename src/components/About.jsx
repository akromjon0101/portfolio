import { FileDown } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import CodeWindow from './CodeWindow.jsx'
import { profile } from '../data/config.js'
import { useT } from '../i18n/index.jsx'

export default function About() {
  const t = useT()

  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="container-xl grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div className="flex min-w-0 flex-col gap-8">
          <SectionHeading
            eyebrow={t('about.eyebrow')}
            title={
              <>
                {t('about.titlePre')} <span className="text-accent">{t('about.titleAccent')}</span>
                {t('about.titlePost')}
              </>
            }
          />

          <Reveal delay={0.1} className="flex flex-col gap-5 text-base leading-relaxed text-ink-dim sm:text-lg">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-wrap items-center gap-4">
            <div className="panel inline-flex flex-col gap-1 rounded-2xl border border-border bg-surface px-6 py-5">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {t('about.philosophyLabel')}
              </span>
              <p className="section-heading text-xl text-ink sm:text-2xl">{t('about.philosophyValue')}</p>
            </div>
            <a
              href={profile.resumeUrl}
              download
              className="btn-lift inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink-faint hover:bg-surface"
            >
              <FileDown size={16} />
              {t('common.resume')}
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="flex min-w-0 flex-col gap-6">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-[2rem] bg-accent-soft blur-xl" aria-hidden="true" />
            <div className="panel relative overflow-hidden rounded-3xl border border-border bg-surface">
              <img
                src="/profile.jpg"
                alt={t('about.photoAlt')}
                width={600}
                height={720}
                className="aspect-[5/6] w-full object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-canvas/80 to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-full border border-border-strong bg-canvas/70 px-3 py-1.5 text-xs font-medium text-ink backdrop-blur">
                {profile.name} — {t('common.role')}
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <CodeWindow />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
