import { regApi } from '@/api/auth'
import { message } from 'antd'
import to from 'await-to-js'
import type { ActionFunctionArgs } from 'react-router'
import { redirect } from 'react-router'

export const action = async ({ request }: ActionFunctionArgs) => {
  console.log(request)
  const formData = await request.formData()

  const [err, response] = await to(regApi(formData))
  console.log(err, response)

  if (err) {
    return null
  }
  message.success('注册成功，请登录')
  return redirect('/login?username=' + formData.get('username'))
}
