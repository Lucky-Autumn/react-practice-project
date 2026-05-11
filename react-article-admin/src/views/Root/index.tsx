import logo from '@/assets/vite.svg'
import RootHeader from '@/components/RootHeader'
import RootMenu from '@/components/RootMenu'
import { useAppStore } from '@/store/appStore'
import { Layout } from 'antd'
import React from 'react'
import { Outlet } from 'react-router'
import styles from './index.module.scss'

const { Sider, Content, Footer } = Layout

const Root: React.FC = () => {
  const collapsed = useAppStore((state) => state.collapsed)

  return (
    <Layout className={styles.container}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {/* logo */}
        <div className={styles.box}>
          <img src={logo} alt="logo" className={styles.logo} />
          {!collapsed && <h1 className={styles.title}>Lucky-Autumn</h1>}
        </div>
        {/* 侧边栏 */}
        <RootMenu />
      </Sider>
      <Layout>
        <RootHeader />
        <Content className={styles.content}>
          <Outlet />
        </Content>
        <Footer className={styles.footer}>Powered by Lucky-Autumn</Footer>
      </Layout>
    </Layout>
  )
}

export default Root
