import { updateUserInfoApi } from '@/api/user'
import { message } from 'antd'
import to from 'await-to-js'
import type { ActionFunctionArgs } from 'react-router'

export const action = async ({ request }: ActionFunctionArgs) => {
  const fd = await request.formData()
  const [err] = await to(updateUserInfoApi(fd))

  if (err) return null
  message.success('更新成功！')

  return null
}
