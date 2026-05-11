import apiClient, { type ApiResponse } from '..'
import type { MenuResponse, UserResponse } from './type'

export const getUserInfoApi = async () => {
  return apiClient.get<null, UserResponse>('/my/userinfo')
}

export const getMenuApi = async () => {
  return apiClient.get<null, MenuResponse>('/my/menus')
}

export const updateUserInfoApi = async (userInfo: FormData) => {
  return apiClient.put<null, ApiResponse>('/my/userinfo', userInfo)
}
