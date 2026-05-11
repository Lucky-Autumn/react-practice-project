import { useAppStore } from '@/store/appStore'
import type { FormProps } from 'antd'
import { Button, Form, Input, Space } from 'antd'
import React, { useEffect } from 'react'
import { useActionData, useNavigation, useSubmit } from 'react-router'

type FieldType = {
  old_pwd: string
  new_pwd: string
  re_pwd: string
}

const UserPassword: React.FC = () => {
  const logout = useAppStore((state) => state.logout)
  const submit = useSubmit()
  const navigation = useNavigation()
  const actionData = useActionData()
  const [form] = Form.useForm()
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    submit(values, { method: 'PATCH' })
  }
  useEffect(() => {
    if (actionData?.result) {
      form.resetFields()
      logout()
    }
  }, [actionData, form, logout])
  return (
    <Form
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="旧密码"
        name="old_pwd"
        rules={[
          { required: true, message: '请输入旧密码!' },
          {
            pattern: /^[a-zA-Z\d]{5,15}$/,
            message: '旧密码必须在5-15个字符之间，且包含字母、数字和下划线!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        label="新密码"
        name="new_pwd"
        dependencies={['old_pwd']}
        validateFirst
        rules={[
          { required: true, message: '请输入新密码!' },
          {
            pattern: /^[a-zA-Z\d]{5,15}$/,
            message: '新密码必须在5-15个字符之间，且包含字母、数字!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || value !== getFieldValue('old_pwd')) {
                return Promise.resolve()
              }
              return Promise.reject(new Error('新旧密码不能相同'))
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        label="确认密码"
        name="re_pwd"
        dependencies={['new_pwd']}
        validateFirst
        rules={[
          { required: true, message: '请确认新密码!' },
          {
            pattern: /^[a-zA-Z\d]{5,15}$/,
            message: '新密码必须在5-15个字符之间，且包含字母、数字!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || value === getFieldValue('new_pwd')) {
                return Promise.resolve()
              }
              return Promise.reject(new Error('两次输入的密码不一致'))
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item label={null}>
        <Space>
          <Button
            type="primary"
            htmlType="submit"
            loading={navigation.state !== 'idle' && { delay: 500 }}
          >
            提交
          </Button>
          <Button type="default" htmlType="reset">
            重置
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}
export default UserPassword
