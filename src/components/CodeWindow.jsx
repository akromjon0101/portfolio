import { motion } from 'framer-motion'

const lines = [
  { indent: 0, tokens: [{ t: 'kw', v: 'const' }, { t: 'plain', v: ' developer = {' }] },
  { indent: 1, tokens: [{ t: 'prop', v: 'name' }, { t: 'plain', v: ': ' }, { t: 'str', v: '"Akrom"' }, { t: 'plain', v: ',' }] },
  { indent: 1, tokens: [{ t: 'prop', v: 'role' }, { t: 'plain', v: ': ' }, { t: 'str', v: '"Full Stack Developer"' }, { t: 'plain', v: ',' }] },
  {
    indent: 1,
    tokens: [
      { t: 'prop', v: 'stack' },
      { t: 'plain', v: ': [' },
      { t: 'str', v: '"React"' },
      { t: 'plain', v: ', ' },
      { t: 'str', v: '"JavaScript"' },
      { t: 'plain', v: ', ' },
      { t: 'str', v: '"Python"' },
      { t: 'plain', v: '],' },
    ],
  },
  { indent: 1, tokens: [{ t: 'prop', v: 'passion' }, { t: 'plain', v: ': ' }, { t: 'str', v: '"Building useful products"' }] },
  { indent: 0, tokens: [{ t: 'plain', v: '};' }] },
]

const tokenColor = {
  kw: 'text-[#c084fc]',
  prop: 'text-[#93c5fd]',
  str: 'text-[#86efac]',
  plain: 'text-ink-dim',
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
}

const lineVariant = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: 'easeOut' } },
}

export default function CodeWindow() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-ink-faint">developer.js</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm">
        <motion.code
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={container}
          className="block"
        >
          {lines.map((line, i) => (
            <motion.div key={i} variants={lineVariant} style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
              {line.tokens.map((tok, j) => (
                <span key={j} className={tokenColor[tok.t]}>
                  {tok.v}
                </span>
              ))}
            </motion.div>
          ))}
        </motion.code>
      </pre>
    </div>
  )
}
