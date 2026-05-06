import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from "./app/router/router.tsx"
import "./app/styles/globals.scss"
import "./app/styles/tailwind.css"
import './shared/styles/variables.scss'
import { QueryProvider } from './app/providers/QueryProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <Router />
    </QueryProvider>
  </StrictMode>,
)
