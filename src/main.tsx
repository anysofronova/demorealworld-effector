import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { Application, AuthProvider } from '@/app'

const container = document.getElementById('root') as HTMLElement

createRoot(container).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <Application />
      </Router>
    </AuthProvider>
  </StrictMode>,
)
