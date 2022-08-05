import 'react-toastify/dist/ReactToastify.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { Application, AuthProvider } from '@/app'

const container = document.getElementById('root') as HTMLElement

createRoot(container).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <ToastContainer
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          rtl={false}
        />
        <Application />
      </Router>
    </AuthProvider>
  </StrictMode>,
)
