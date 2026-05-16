import logo from '@/assets/imgs/logo.png'
import RootFooter from '@/layout/RootFooter'
import RootHeader from '@/layout/RootHeader'
import RootMenu from '@/layout/RootMenu'
import useAppStore from '@/store/useAppStore'
import { Layout, theme } from 'antd'
import React from 'react'
import styles from './styles/Root.module.scss'

const { Sider, Content } = Layout

const Root: React.FC = () => {
  const collapsed = useAppStore((state) => state.collapsed)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout className={styles['layout-container']}>
      <Sider
        trigger={null}
        style={{
          backgroundColor: colorBgContainer,
          borderRight: '1px solid #e8e8e8',
        }}
        collapsible
        collapsed={collapsed}
      >
        <h1 className={styles['logo-container']}>
          <img src={logo} alt="logo" />
          {!collapsed && <p className={styles['logo-text']}>企业中台</p>}
        </h1>
        <RootMenu />
      </Sider>
      <Layout>
        <RootHeader />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
        <RootFooter />
      </Layout>
    </Layout>
  )
}

export default Root
