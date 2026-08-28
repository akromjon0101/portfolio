import { Code2, Server, Layers } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { StaggerGroup, StaggerItem } from './Stagger.jsx'
import { serviceIcons } from '../data/services.js'
import { useT } from '../i18n/index.jsx'

const iconMap = { Code2, Server, Layers }

export default function Services() {
  const t = useT()
  const items = t('services.items')

  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="container-xl">
        <SectionHeading
          align="center"
          eyebrow={t('services.eyebrow')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
        />

        <StaggerGroup className="mt-16 flex flex-col gap-5">
          {items.map((service, i) => {
            const Icon = iconMap[serviceIcons[i]] ?? Layers
            return (
              <StaggerItem
                key={service.title}
                className="hover-lift flex items-center justify-between gap-6 rounded-2xl border border-border bg-surface p-6 hover:border-border-strong sm:p-8"
              >
                <div className="flex flex-col gap-3">
                  <h3 className="section-heading text-xl text-ink sm:text-2xl">{service.title}</h3>
                  <p className="max-w-lg text-sm text-ink-dim sm:text-base">{service.description}</p>
                  <span className="text-xs font-medium uppercase tracking-wide text-ink-faint">{service.stat}</span>
                </div>
                <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/40 text-accent sm:flex">
                  <Icon size={20} />
                </span>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
