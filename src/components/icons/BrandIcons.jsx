// lucide-react dropped brand/logo icons (GitHub, LinkedIn, Telegram) in v1,
// so these are small inline SVGs kept consistent with lucide's sizing API
// (size + currentColor) for drop-in use anywhere a lucide icon is used.

export function GithubIcon({ size = 18, className = '', ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1.16-.02-2.11-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.19 1.78 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.41-1.26.74-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.24 2.75.12 3.04.73.8 1.17 1.83 1.17 3.08 0 4.41-2.69 5.38-5.25 5.67.42.36.78 1.08.78 2.18 0 1.57-.02 2.84-.02 3.23 0 .31.21.67.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  )
}

export function LinkedinIcon({ size = 18, className = '', ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.68H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.48v6.26ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  )
}

export function TelegramIcon({ size = 18, className = '', ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <path d="M21.94 3.6 18.6 20.36c-.25 1.1-.9 1.38-1.83.86l-5.06-3.73-2.44 2.35c-.27.27-.5.5-1.02.5l.36-5.16 9.39-8.49c.41-.36-.09-.57-.63-.2L6.05 13.02.94 11.4c-1.11-.35-1.13-1.11.24-1.64L20.54 2.24c.93-.34 1.74.22 1.4 1.36Z" />
    </svg>
  )
}
