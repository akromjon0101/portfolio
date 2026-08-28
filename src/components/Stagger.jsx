import { motion } from 'framer-motion'

// Shared stagger-on-scroll pair: wrap a list in <StaggerGroup>, wrap each
// item in <StaggerItem>, and the items cascade in instead of popping
// together. MotionConfig (see main.jsx) collapses this under
// prefers-reduced-motion automatically.
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
}

export function StaggerGroup({ children, className = '', ...rest }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={containerVariants}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, as = 'div', className = '', ...rest }) {
  const Component = motion[as]
  return (
    <Component variants={itemVariants} className={className} {...rest}>
      {children}
    </Component>
  )
}
