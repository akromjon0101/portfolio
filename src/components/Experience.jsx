import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { timeline } from '../data/config.js'
import { useT } from '../i18n/index.jsx'

export default function Experience() {
  const t = useT()
  const items = t('experience.items')

  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="container-xl">
        <SectionHeading eyebrow={t('experience.eyebrow')} title={t('experience.title')} />

        <div className="relative mx-auto mt-16 max-w-2xl">
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-border-strong to-transparent" />

          <ol className="flex flex-col gap-10">
            {timeline.map((entry, i) => {
              const item = items[i] ?? {}
              return (
                <Reveal key={entry.year} as="li" delay={i * 0.1} className="relative pl-8">
                  <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />

                  <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">{entry.year}</span>
                  <h3 className="section-heading mt-1 text-lg text-ink sm:text-xl">{item.title}</h3>
                  <p className="mt-0.5 text-sm text-ink-dim">{item.org}</p>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-faint sm:text-base">
                    {item.description}
                  </p>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
