// A compact scroll cue: a vertical capsule with a dot that travels down
// it on a loop, plus a small vertical "SCROLL" label and an arrow. Original
// composition — no rotating circular text ring.
export default function CircularScrollCTA({ label = 'Scroll', targetId = 'projects' }) {
  return (
    <a
      href={`#${targetId}`}
      aria-label={`Scroll to ${label.toLowerCase()}`}
      className="group flex flex-col items-center gap-3"
    >
      <span
        className="[writing-mode:vertical-rl] text-xs font-medium uppercase tracking-[0.3em] text-ink-faint transition-colors group-hover:text-ink-dim"
      >
        {label}
      </span>
      <span className="relative flex h-20 w-8 items-start justify-center overflow-hidden rounded-full border border-border-strong p-1.5 transition-colors group-hover:border-accent">
        <span className="h-2 w-2 animate-scroll-dot rounded-full bg-accent" />
      </span>
    </a>
  )
}
