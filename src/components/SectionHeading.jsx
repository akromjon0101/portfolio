import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="section-heading text-3xl text-ink sm:text-4xl">{title}</h2>
      {subtitle && <p className="text-base text-ink-dim sm:text-lg">{subtitle}</p>}
    </Reveal>
  )
}
