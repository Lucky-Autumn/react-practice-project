import { Layout, theme } from 'antd'
import styles from './styles/RootFooter.module.scss'

const { Footer } = Layout

const RootFooter = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <Footer
      className={styles['footer-wrapper']}
      style={{ backgroundColor: colorBgContainer }}
    >
      <p>Copyright © 2025 怕是一场梦 后台管理系统</p>
    </Footer>
  )
}

export default RootFooter
