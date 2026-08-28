import Reveal from './Reveal.jsx'
import { useT } from '../i18n/index.jsx'

export default function Philosophy() {
  const t = useT()

  return (
    <section className="relative border-y border-border py-32 md:py-44">
      <div className="container-xl relative flex flex-col items-center gap-6 text-center">
        <Reveal>
          <p className="section-heading max-w-3xl text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
            &ldquo;{t('philosophy.quotePre')}
            <br className="hidden sm:block" /> {t('philosophy.quotePost')}{' '}
            <span className="text-accent">{t('philosophy.quoteAccent')}</span>.&rdquo;
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="max-w-lg text-base text-ink-dim sm:text-lg">{t('philosophy.sub')}</p>
        </Reveal>
      </div>
    </section>
  )
}
