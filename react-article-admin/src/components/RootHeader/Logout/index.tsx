import { useAppStore } from '@/store/appStore'
import { Button, Popconfirm } from 'antd'
import { useNavigate } from 'react-router'

const Logout = () => {
  const navigate = useNavigate()
  const logout = useAppStore.getState().logout
  const confirm = () => {
    logout()
    navigate('/login')
  }

  return (
    <Popconfirm
      title="Delete the task"
      description="Are you sure to delete this task?"
      onConfirm={confirm}
      okText="Yes"
      cancelText="No"
    >
      <Button type="link">退出登录</Button>
    </Popconfirm>
  )
}

export default Logout
