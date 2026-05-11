import apiClient, { type ApiResponse } from '@/api'
import type { LoginResponse } from './type'

export const regApi = (value: FormData) => {
  return apiClient.post<null, ApiResponse>('/api/reg', value)
}

export const loginApi = (value: FormData) => {
  return apiClient.post<null, LoginResponse>('/api/login', value)
}
