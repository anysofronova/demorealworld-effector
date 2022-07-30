import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Application } from '@/app'

const container = document.getElementById('root') as HTMLElement

createRoot(container).render(
  <StrictMode>
    <Application />
  </StrictMode>,
)
