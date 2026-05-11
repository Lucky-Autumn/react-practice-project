import { useAppStore } from '@/store/appStore'
import type { FC, ReactNode } from 'react'
import { Navigate } from 'react-router'
import styles from './index.module.scss'

const AuthLayuout: FC<{ children: ReactNode }> = ({ children }) => {
  const token = useAppStore((state) => state.token)
  if (token) {
    return <Navigate to="/" replace />
  }
  return (
    <div className={styles.container}>
      <div className={styles.box}>{children}</div>
    </div>
  )
}

export default AuthLayuout
