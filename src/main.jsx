import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import App from './App.jsx'
import { LanguageProvider } from './i18n/index.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Honors the OS-level prefers-reduced-motion setting across every
        Framer Motion animation in the app (reveals, stagger, page
        transitions) without threading a check through each component. */}
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LanguageProvider>
    </MotionConfig>
  </StrictMode>,
)
