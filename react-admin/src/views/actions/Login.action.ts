import { login } from '@/api/auth'
import to from 'await-to-js'
import type { ActionFunctionArgs } from 'react-router'

export const loginAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData()
  const data = {
    username: formData.get('username').toString(),
    password: formData.get('password').toString(),
  }
  const [error, res] = await to(login(data))

  if (error) {
    return { success: false, message: '登录失败' }
  }
  return { success: true, message: '登录成功', token: res }
}
