import { motion } from 'framer-motion'
import { Atom, Braces, Wind, Server, Network, Database, Flame, Terminal } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { StaggerGroup, StaggerItem } from './Stagger.jsx'
import { topSkills } from '../data/skills.js'
import { useT } from '../i18n/index.jsx'

const iconMap = { Atom, Braces, Wind, Server, Network, Database, Flame, Terminal }

const SIZE = 128
const STROKE = 4
const RADIUS = (SIZE - STROKE) / 2
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

function SkillRing({ name, icon, level }) {
  const Icon = iconMap[icon]
  const offset = CIRCUMFERENCE * (1 - level / 100)

  return (
    <StaggerItem className="flex flex-col items-center gap-4">
      <div className="relative flex items-center justify-center" style={{ width: SIZE, height: SIZE }}>
        <svg width={SIZE} height={SIZE} className="-rotate-90">
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            strokeWidth={STROKE}
            className="stroke-border"
          />
          <motion.circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            strokeWidth={STROKE}
            strokeLinecap="round"
            className="stroke-accent"
            style={{ strokeDasharray: CIRCUMFERENCE }}
            initial={{ strokeDashoffset: CIRCUMFERENCE }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute flex flex-col items-center gap-1">
          <Icon size={22} className="text-ink" />
          <span className="section-heading text-lg text-accent">{level}%</span>
        </div>
      </div>
      <span className="text-sm font-medium text-ink-dim">{name}</span>
    </StaggerItem>
  )
}

export default function Skills() {
  const t = useT()
  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="container-xl">
        <SectionHeading
          align="center"
          eyebrow={t('skills.eyebrow')}
          title={t('skills.title')}
          subtitle={t('skills.subtitle')}
        />

        <StaggerGroup className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {topSkills.map((skill) => (
            <SkillRing key={skill.name} {...skill} />
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
