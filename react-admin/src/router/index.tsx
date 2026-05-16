import AuthGuard from '@/components/AuthGuard'
import AuthLayout from '@/components/AuthLayout'
import { loginAction } from '@/views/actions/Login.action'
import { createBrowserRouter } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/login',
    lazy: async () => {
      const { default: Login } = await import('@/views/Login')
      return {
        element: (
          <AuthGuard>
            <Login />
          </AuthGuard>
        ),
        action: loginAction,
      }
    },
  },
  {
    path: '/',
    children: [],
    lazy: async () => {
      const { default: Root } = await import('@/views/Root')
      return {
        element: (
          <AuthLayout>
            <Root />
          </AuthLayout>
        ),
      }
    },
  },
])

export default router
