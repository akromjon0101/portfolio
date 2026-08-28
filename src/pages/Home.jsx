import { motion } from 'framer-motion'
import Sidebar from '../components/shell/Sidebar.jsx'
import IconRail from '../components/shell/IconRail.jsx'
import TopBar from '../components/shell/TopBar.jsx'
import ScrollProgress from '../components/ScrollProgress.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Experience from '../components/Experience.jsx'
import Services from '../components/Services.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import GithubSection from '../components/GithubSection.jsx'
import Philosophy from '../components/Philosophy.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="relative z-10"
    >
      <ScrollProgress />
      <TopBar />
      <Sidebar />
      <IconRail />
      <main className="min-w-0 lg:pl-[356px] lg:pr-[120px] xl:pl-[376px]">
        <Hero />
        <About />
        <Experience />
        <Services />
        <Skills />
        <Projects />
        <GithubSection />
        <Philosophy />
        <Contact />
      </main>
      <div className="lg:pl-[356px] lg:pr-[120px] xl:pl-[376px]">
        <Footer />
      </div>
    </motion.div>
  )
}
