import useAppStore from '@/store/useAppStore'
import { message } from 'antd'
import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  timeoutErrorMessage: '请求超时，请稍后重试',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + useAppStore.getState().token,
  },
})

request.interceptors.request.use(
  (config) => {
    // TODO: 处理请求头
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

request.interceptors.response.use(
  (response) => {
    const data = response.data
    if (data.code === '40001') {
      // 跳转到登录页
      useAppStore.getState().logout()
      return Promise.reject(data)
    }
    if (data.code !== 200) {
      message.error(data.msg || '请求失败')
      return Promise.reject(data)
    }

    return data
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default {
  get: <T>(url: string, params?: object): Promise<T> =>
    request.get<T>(url, { params }).then((res) => res.data),
  post: <T>(url: string, data?: object): Promise<T> =>
    request.post<T>(url, data).then((res) => res.data),
  put: <T>(url: string, data?: object): Promise<T> =>
    request.put<T>(url, data).then((res) => res.data),
  delete: <T>(url: string): Promise<T> =>
    request.delete<T>(url).then((res) => res.data),
  patch: <T>(url: string, data?: object): Promise<T> =>
    request.patch<T>(url, data).then((res) => res.data),
}

export type Response<T> = {
  code: number
  msg: string
  data: T
}
