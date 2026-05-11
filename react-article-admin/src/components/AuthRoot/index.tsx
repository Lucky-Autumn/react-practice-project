import { useAppStore } from '@/store/appStore'
import { Navigate } from 'react-router'

const AuthRoot: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = useAppStore((state) => state.token)

  if (!token) {
    // Redirect to login page or show login component
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}

export default AuthRoot
