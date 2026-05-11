import { useAppStore } from '@/store/appStore'
import { useUserStore } from '@/store/userStore'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Avatar, Button, Layout } from 'antd'
import styles from './index.module.scss'
import Logout from './Logout'
import RootBreadcrumb from './RootBreadcrumb'

const { Header } = Layout

const RootHeader: React.FC = () => {
  const collapsed = useAppStore((state) => state.collapsed)
  const setCollapsed = useAppStore((state) => state.setCollapsed)
  const user = useUserStore((state) => state.user)
  return (
    <Header className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: 18, width: 64, height: 64 }}
          />
          <div className={styles.breadcrumb}>
            <p>欢迎{user?.nickname}，您当前的位置：</p>
            <RootBreadcrumb />
          </div>
        </div>
        <div className={styles.right}>
          {user?.user_pic ? (
            <Avatar size="small" src={user.user_pic} />
          ) : (
            <Avatar size="small" icon={<UserOutlined />} />
          )}
          <Logout />
        </div>
      </div>
    </Header>
  )
}

export default RootHeader
