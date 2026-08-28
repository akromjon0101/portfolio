import { motion, useScroll, useSpring } from 'framer-motion'

// Thin accent bar fixed to the top edge, filling with page scroll position.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-accent"
      aria-hidden="true"
    />
  )
}
