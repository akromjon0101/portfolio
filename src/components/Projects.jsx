import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'
import { useT } from '../i18n/index.jsx'

export default function Projects() {
  const t = useT()

  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="container-xl">
        <SectionHeading
          align="center"
          eyebrow={t('projects.eyebrow')}
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05} className={i === 0 ? 'lg:col-span-2' : ''}>
              <ProjectCard project={project} wide={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
