import { motion } from 'framer-motion'

// Shared fade + slide-up reveal used across sections so scroll-triggered
// entrances stay consistent instead of every component rolling its own.
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 14,
  className = '',
  ...rest
}) {
  const Component = typeof as === 'string' ? motion[as] : as

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.35, delay, ease: 'easeOut' }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  )
}
