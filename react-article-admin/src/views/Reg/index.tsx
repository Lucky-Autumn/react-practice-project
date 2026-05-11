import type { RegFormValues } from '@/types/auth'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import React from 'react'
import { Link, useNavigation, useSubmit } from 'react-router'

const Reg: React.FC = () => {
  const submit = useSubmit()
  const navigation = useNavigation()
  const onFinish = (values: RegFormValues) => {
    console.log(values)
    submit(values, { method: 'post' })
  }

  return (
    <Form onFinish={onFinish} size="large">
      <Form.Item
        name="username"
        rules={[
          { required: true, message: '请输入用户名!' },
          {
            pattern: /^\w{5,15}$/,
            message: '用户名必须在5-15个字符之间，且包含字母、数字和下划线!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="用户名" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          { required: true, message: '请输入密码!' },
          {
            pattern: /^[a-zA-Z\d]{5,15}$/,
            message: '密码必须在5-15个字符之间，且包含字母、数字!',
          },
        ]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="密码" />
      </Form.Item>

      <Form.Item
        name="repassword"
        dependencies={['password']}
        validateFirst
        rules={[
          { required: true, message: '请确认密码!' },
          {
            pattern: /^[a-zA-Z\d]{5,15}$/,
            message: '密码必须在5-15个字符之间，且包含字母、数字!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              // 如果没填，不校验（前面 required 已经控制了）
              if (!value) return Promise.resolve()

              // 获取密码框的值
              const password = getFieldValue('password')

              // 判断是否一致
              if (value === password) {
                return Promise.resolve()
              }

              // 不一致就报错
              return Promise.reject(new Error('两次输入的密码不一致！'))
            },
          }),
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="确认密码"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          loading={navigation.state !== 'idle' && { delay: 200 }}
          htmlType="submit"
        >
          注 册
        </Button>
        或者 <Link to="/login">立即登录!</Link>
      </Form.Item>
    </Form>
  )
}

export default Reg
