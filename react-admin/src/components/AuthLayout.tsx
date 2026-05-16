import useAppStore from '@/store/useAppStore'
import type { FC, ReactNode } from 'react'
import { Navigate } from 'react-router'

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const token = useAppStore((state) => state.token)
  if (token) {
    return children
  }
  return <Navigate to="/login" />
}

export default AuthLayout
