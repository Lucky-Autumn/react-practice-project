import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Layout, theme } from 'antd'
import useAppStore from '../store/useAppStore'

const { Header } = Layout

const RootHeader = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  const collapsed = useAppStore((state) => state.collapsed)
  const setCollapsed = useAppStore((state) => state.setCollapsed)
  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
    </Header>
  )
}

export default RootHeader
