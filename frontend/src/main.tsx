import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Homepage from './screens/Homepage.tsx'
import ProfessionalBio from './screens/ProfessionalBio.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Homepage />},
      {path: 'professional-bio', element: <ProfessionalBio />},
    ]
  }
])

createRoot(document.getElementById('root')!).render(
 <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
