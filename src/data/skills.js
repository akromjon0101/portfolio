// Centralized skills data, grouped by category and rendered by <Skills />.
// Icons come from lucide-react; swap the `icon` key to change what renders.

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Interfaces that feel fast and intentional.',
    skills: [
      { name: 'React', icon: 'Atom' },
      { name: 'JavaScript', icon: 'Braces' },
      { name: 'HTML5', icon: 'Code2' },
      { name: 'CSS3', icon: 'Palette' },
      { name: 'Tailwind CSS', icon: 'Wind' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'APIs and services that hold up under real use.',
    skills: [
      { name: 'Node.js', icon: 'Server' },
      { name: 'Python', icon: 'Terminal' },
      { name: 'REST APIs', icon: 'Network' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    description: 'Data modeled with structure and clear intent.',
    skills: [
      { name: 'MongoDB', icon: 'Database' },
      { name: 'Firebase', icon: 'Flame' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    description: 'The daily workflow that keeps shipping smooth.',
    skills: [
      { name: 'Git', icon: 'GitBranch' },
      { name: 'GitHub', icon: 'Github' },
      { name: 'VS Code', icon: 'FileCode' },
      { name: 'npm', icon: 'Package' },
    ],
  },
]

// A representative subset used by the circular "Advantages" ring grid.
// Percentages are honest, modest estimates consistent with the "3+ years
// learning & building" stat in config.js — not claims of mastery.
export const topSkills = [
  { name: 'React', icon: 'Atom', level: 88 },
  { name: 'JavaScript', icon: 'Braces', level: 85 },
  { name: 'Tailwind CSS', icon: 'Wind', level: 90 },
  { name: 'Node.js', icon: 'Server', level: 78 },
  { name: 'REST APIs', icon: 'Network', level: 82 },
  { name: 'MongoDB', icon: 'Database', level: 75 },
  { name: 'Firebase', icon: 'Flame', level: 72 },
  { name: 'Python', icon: 'Terminal', level: 65 },
]
