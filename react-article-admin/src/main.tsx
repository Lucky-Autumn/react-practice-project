import router from '@/router'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.scss'

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
