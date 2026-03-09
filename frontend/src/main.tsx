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
import NotFound from './screens/NotFound.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Homepage />},
      {path: 'professional-bio', element: <ProfessionalBio />},
      {path: '*', element: <NotFound />}
    ]
  }
])

createRoot(document.getElementById('root')!).render(
 <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
