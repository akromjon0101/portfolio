import { useState } from 'react'
import { Mail, Send, CheckCircle2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TelegramIcon, InstagramIcon } from './icons/BrandIcons.jsx'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { StaggerGroup, StaggerItem } from './Stagger.jsx'
import { profile } from '../data/config.js'
import { useT } from '../i18n/index.jsx'

const contactLinks = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: GithubIcon, label: 'GitHub', value: '@' + profile.github.split('/').pop(), href: profile.github },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'Akromjon Toshpulatov', href: profile.linkedin },
  { icon: TelegramIcon, label: 'Telegram', value: '@' + profile.telegram.split('/').pop(), href: profile.telegram },
  { icon: InstagramIcon, label: 'Instagram', value: '@' + profile.instagram.split('/').filter(Boolean).pop(), href: profile.instagram },
]

const initialForm = { name: '', email: '', subject: '', message: '' }

function validate(values, t) {
  const errors = {}
  if (!values.name.trim()) errors.name = t('contact.errName')
  if (!values.email.trim()) {
    errors.email = t('contact.errEmail')
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = t('contact.errEmailValid')
  }
  if (!values.subject.trim()) errors.subject = t('contact.errSubject')
  if (!values.message.trim()) {
    errors.message = t('contact.errMessage')
  } else if (values.message.trim().length < 10) {
    errors.message = t('contact.errMessageLen')
  }
  return errors
}

export default function Contact() {
  const t = useT()
  const [values, setValues] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | sent

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate(values, t)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    // No backend wired up yet — simulate a submit so the UX reads as finished.
    setTimeout(() => {
      setStatus('sent')
      setValues(initialForm)
    }, 900)
  }

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="container-xl grid min-w-0 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="flex min-w-0 flex-col gap-8">
          <SectionHeading
            eyebrow={t('contact.eyebrow')}
            title={t('contact.title')}
            subtitle={t('contact.subtitle')}
          />

          <StaggerGroup className="flex flex-col gap-3">
            {contactLinks.map(({ icon: Icon, label, value, href }) => (
              <StaggerItem
                key={label}
                as="a"
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="hover-lift group flex items-center gap-4 rounded-xl border border-border bg-surface/50 px-4 py-3.5 hover:border-border-strong"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Icon size={18} />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="text-xs text-ink-faint">{label}</span>
                  <span className="break-words text-sm font-medium text-ink group-hover:text-accent">{value}</span>
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <Reveal delay={0.15} as="form" onSubmit={handleSubmit} noValidate className="panel flex min-w-0 flex-col gap-5 rounded-3xl border border-border bg-surface p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label={t('contact.name')}
              name="name"
              value={values.name}
              onChange={handleChange}
              error={errors.name}
              autoComplete="name"
            />
            <Field
              label={t('contact.email')}
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              autoComplete="email"
            />
          </div>

          <Field
            label={t('contact.subject')}
            name="subject"
            value={values.subject}
            onChange={handleChange}
            error={errors.subject}
          />

          <Field
            label={t('contact.message')}
            name="message"
            as="textarea"
            rows={5}
            value={values.message}
            onChange={handleChange}
            error={errors.message}
          />

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="btn-lift mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-canvas transition-colors hover:bg-ink/90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'sent' ? (
              <>
                <CheckCircle2 size={16} /> {t('contact.sent')}
              </>
            ) : status === 'submitting' ? (
              t('contact.sending')
            ) : (
              <>
                {t('contact.send')} <Send size={15} />
              </>
            )}
          </button>

          {status === 'sent' && (
            <p role="status" className="text-sm text-accent">
              {t('contact.success')}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, name, error, as = 'input', ...rest }) {
  const Tag = as
  const id = `field-${name}`
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-ink-dim">
        {label}
      </label>
      <Tag
        id={id}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`rounded-xl border bg-surface-2/60 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-accent ${
          error ? 'border-red-400/60' : 'border-border'
        }`}
        {...rest}
      />
      {error && (
        <span id={`${id}-error`} className="text-xs text-red-400">
          {error}
        </span>
      )}
    </div>
  )
}
