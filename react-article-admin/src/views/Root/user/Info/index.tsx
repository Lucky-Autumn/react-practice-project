import { useUserStore } from '@/store/userStore'
import type { UserInfoValues } from '@/types/user'
import type { FormProps } from 'antd'
import { Button, Form, Input, Space } from 'antd'
import React from 'react'
import { useSubmit } from 'react-router'
import { useShallow } from 'zustand/react/shallow'

const UserInfo: React.FC = () => {
  const submit = useSubmit()
  const onFinish: FormProps<UserInfoValues>['onFinish'] = (values) => {
    submit(values, { method: 'PUT' })
  }

  const [form] = Form.useForm()
  const userInfo = useUserStore(
    useShallow((state) => ({
      id: state.user.id,
      nickname: state.user.nickname,
      email: state.user.email,
    })),
  )
  return (
    <Form
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={userInfo}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<UserInfoValues['id']> label="id" name="id" hidden>
        <Input readOnly />
      </Form.Item>
      <Form.Item<UserInfoValues['nickname']>
        label="昵称"
        name="nickname"
        rules={[
          { required: true, message: '请输入昵称!' },
          {
            pattern: /^[^\s]+$/,
            message: '请输入5-10个非空字符!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<UserInfoValues['email']>
        label="邮箱"
        name="email"
        rules={[
          { required: true, message: '请输入邮箱!' },
          {
            pattern: /^[^\s]+@[^\s]+\.[^\s]+$/,
            message: '请输入正确的邮箱格式!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label={null}>
        <Space>
          <Button type="primary" htmlType="submit">
            修改
          </Button>
          <Button
            type="default"
            htmlType="reset"
            onClick={() => form.resetFields()}
          >
            重置
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}
export default UserInfo
