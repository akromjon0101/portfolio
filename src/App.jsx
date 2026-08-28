import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProjectDetails from './pages/ProjectDetails.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import AnimatedBackground from './components/AnimatedBackground.jsx'

function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      {/* Site-wide, fixed behind every page — see the `relative z-10` on
          each page's root element for how it stays underneath. */}
      <AnimatedBackground />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
