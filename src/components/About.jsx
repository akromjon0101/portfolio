import { FileDown } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import CodeWindow from './CodeWindow.jsx'
import { profile } from '../data/config.js'

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="container-xl grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div className="flex min-w-0 flex-col gap-8">
          <SectionHeading
            eyebrow="About"
            title={
              <>
                A developer who <span className="text-accent">ships</span>, not just experiments.
              </>
            }
          />

          <Reveal delay={0.1} className="flex flex-col gap-5 text-base leading-relaxed text-ink-dim sm:text-lg">
            <p>
              I&apos;m a developer passionate about turning ideas into
              functional, intuitive and scalable digital products. I enjoy
              working with modern technologies and constantly improving my
              skills by building real-world projects.
            </p>
            <p>
              My work spans from polished frontend interfaces to the backend
              systems and databases that power them — I care about the full
              picture, not just how something looks.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-wrap items-center gap-4">
            <div className="panel inline-flex flex-col gap-1 rounded-2xl border border-border bg-surface px-6 py-5">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Philosophy</span>
              <p className="section-heading text-xl text-ink sm:text-2xl">
                Build. Learn. Improve. Repeat.
              </p>
            </div>
            <a
              href={profile.resumeUrl}
              download
              className="btn-lift inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink-faint hover:bg-surface"
            >
              <FileDown size={16} />
              Resume
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="hidden min-w-0 lg:block">
          <CodeWindow />
        </Reveal>
      </div>
    </section>
  )
}
