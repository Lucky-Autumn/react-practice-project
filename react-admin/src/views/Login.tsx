import useAppStore from '@/store/useAppStore'
import type { LoginValues } from '@/types/user'
import type { FormProps } from 'antd'
import { Button, Form, Input, message } from 'antd'
import { useEffect } from 'react'
import { useFetcher } from 'react-router'
import styles from './styles/Login.module.scss'

const Login = () => {
  const setToken = useAppStore((state) => state.setToken)
  const fetcher = useFetcher()
  const onFinish: FormProps<LoginValues>['onFinish'] = (values) => {
    fetcher.submit(values, { method: 'POST' })
  }
  useEffect(() => {
    const data = fetcher.data
    // 如果没有数据，直接返回
    if (!data) return
    // 登录成功
    if (data.success) {
      setToken(data.token)
      message.success('登录成功')
    } else {
      message.error(data.message)
    }
  }, [fetcher.data, setToken]) // 监听数据变化
  return (
    <div className={styles.login}>
      <div className={styles['login-wrapper']}>
        <h1 className={styles.title}>系统登录</h1>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<LoginValues>
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入您的用户名!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<LoginValues>
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入您的密码!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
