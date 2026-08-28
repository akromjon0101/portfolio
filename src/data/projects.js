// Single source of truth for project cards and their detail pages.
// Add a project here and it automatically appears in <Projects /> and
// becomes reachable at /projects/:slug via <ProjectDetails />.

export const projects = [
  {
    slug: 'harvard-school',
    title: 'Harvard School',
    tagline: 'A live IELTS mock-exam portal, in production and used by real students.',
    description:
      'My main, production project — an IELTS mock exam portal with Listening, Reading, Writing and Speaking practice, live at harvard-school.uz.',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop',
    stack: ['React', 'JavaScript', 'REST API', 'MongoDB', 'Firebase'],
    demo: 'https://www.harvard-school.uz/',
    featured: true,
    overview:
      'Harvard School is my flagship project: a full IELTS mock-exam portal that is live in production and actively used by students preparing for the real exam, not just a demo.',
    problem:
      'Students preparing for IELTS need a realistic, full-length practice environment — with real timing pressure and exam-style sections — that is available anytime, not limited to a physical test center.',
    solution:
      'Built and shipped a complete exam portal covering all four IELTS sections (Listening, Reading, Writing, Speaking) with a student-facing practice flow, deployed to a live domain and running in production today.',
    features: [
      'Full-length mock exams across Listening, Reading, Writing and Speaking',
      'Timed, exam-accurate section flow',
      'Student-facing interface built for repeated daily use',
      'Deployed and maintained on a live production domain',
    ],
    challenges:
      'Taking the project from a local build to a stable, live product — handling real users and real exam sessions reliably, not just a portfolio demo.',
    screenshots: [
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop',
    ],
  },
  {
    slug: 'ielts-ai-platform',
    title: 'IELTS AI Practice Platform',
    tagline: 'The next version of Harvard School — with AI scoring for Speaking and Writing.',
    description:
      'A mock IELTS platform that builds on Harvard School by adding AI-based assessment — automatically analyzing Speaking recordings and Writing submissions and scoring them the way an examiner would.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop',
    stack: ['React', 'JavaScript', 'REST API', 'MongoDB', 'AI / Speech Analysis'],
    github: 'https://github.com/akromjontoshpulatov',
    featured: true,
    overview:
      'A step beyond a standard mock-exam platform: Listening, Reading, Writing and Speaking modules, with AI models integrated to grade Speaking and Writing automatically instead of relying only on manual review.',
    problem:
      'Manually scoring every student\'s Speaking recording and Writing essay does not scale, and students practicing on their own have no way to get exam-style feedback between sessions with a teacher.',
    solution:
      'Added an AI evaluation layer on top of the existing mock-exam engine: Speaking recordings are analyzed for fluency, pronunciation and coherence, and Writing submissions are scored against IELTS band descriptors with actionable feedback — both automatically, right after submission.',
    features: [
      'AI-powered Speaking assessment — analyzes recorded answers for fluency, pronunciation and coherence',
      'AI Writing analysis — scores essays against IELTS band descriptors with specific feedback',
      'Listening and Reading modules carried over from the core exam engine',
      'Instant, automated feedback instead of waiting on manual grading',
    ],
    challenges:
      'Calibrating AI-generated Speaking and Writing scores to track real IELTS band descriptors closely enough that the feedback is actually trustworthy, while keeping turnaround fast enough to feel instant. Currently in development — not yet on a live domain.',
    screenshots: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop',
    ],
  },
  {
    slug: 'education-crm',
    title: 'Education CRM',
    tagline: 'One dashboard for students, teachers, groups and payments.',
    description:
      'A modern CRM platform designed for education centers to manage students, teachers, groups, payments, attendance and schedules.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
    stack: ['React', 'Node.js', 'MongoDB', 'REST API'],
    github: 'https://github.com/akromjontoshpulatov',
    demo: 'https://akrom.dev',
    featured: true,
    overview:
      'A day-to-day operations tool for education centers — replacing spreadsheets with a single system for enrollment, scheduling, attendance and billing.',
    problem:
      'Small education centers often run on scattered spreadsheets and messaging apps, making it hard to track who paid, who attended, and which teacher is free for a new group.',
    solution:
      'Designed a relational data model around students, teachers, groups and payments, then built CRUD-driven dashboards on top of a Node.js/Express API with MongoDB, including attendance logs tied to scheduled sessions.',
    features: [
      'Student and teacher management with searchable, filterable tables',
      'Group scheduling with conflict detection',
      'Attendance tracking per session',
      'Payment history and outstanding balance views',
      'Role-based dashboards for admins and staff',
    ],
    challenges:
      'Modeling the relationships between students, groups, schedules and payments so that changing one (like a student switching groups mid-month) stayed consistent everywhere else.',
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
    ],
  },
  {
    slug: 'burger-ordering-platform',
    title: 'Burger Ordering Platform',
    tagline: 'A fast, filterable ordering experience for food delivery.',
    description:
      'A responsive food ordering interface with dynamic product filtering, categories and interactive UI.',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1600&auto=format&fit=crop',
    stack: ['React', 'JavaScript', 'REST API', 'Tailwind CSS'],
    github: 'https://github.com/akromjontoshpulatov',
    demo: 'https://akrom.dev',
    featured: true,
    overview:
      'A consumer-facing ordering UI focused on speed: fast filtering, clear categories and a cart experience that never feels like it is fighting the user.',
    problem:
      'Many small food-ordering sites load every product at once with weak filtering, making the menu slow to browse on mobile.',
    solution:
      'Built a category-driven product grid with client-side filtering and search, backed by a mock REST API, plus a persistent cart with live totals styled entirely in Tailwind CSS.',
    features: [
      'Dynamic category and ingredient-based filtering',
      'Live search across the menu',
      'Persistent cart with quantity controls and running total',
      'Fully responsive grid from mobile to desktop',
      'Micro-interactions on add-to-cart and hover states',
    ],
    challenges:
      'Keeping filtering and search fast and responsive with zero layout jank as the product grid changes size on every keystroke.',
    screenshots: [
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1600&auto=format&fit=crop',
    ],
  },
]

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)
