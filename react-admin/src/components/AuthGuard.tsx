import useAppStore from '@/store/useAppStore'
import type { FC, ReactNode } from 'react'
import { Navigate } from 'react-router'

const AuthGuard: FC<{ children: ReactNode }> = ({ children }) => {
  const token = useAppStore((state) => state.token)
  // 有token，跳转到首页
  if (token) {
    return <Navigate to="/" />
  }
  // 没有token，展示登录页
  return children
}

export default AuthGuard
