import Reveal from './Reveal.jsx'

export default function Philosophy() {
  return (
    <section className="relative border-y border-border py-32 md:py-44">
      <div className="container-xl relative flex flex-col items-center gap-6 text-center">
        <Reveal>
          <p className="section-heading max-w-3xl text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
            &ldquo;I don&apos;t just write code.
            <br className="hidden sm:block" /> I build <span className="text-accent">solutions</span>.&rdquo;
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="max-w-lg text-base text-ink-dim sm:text-lg">
            I focus on creating software that is useful, maintainable,
            scalable and enjoyable to use.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
