import apiClient, { type ApiResponse } from '..'
import type { MenuResponse, UserResponse } from './type'

export const getUserInfoApi = () => {
  return apiClient.get<null, UserResponse>('/my/userinfo')
}

export const getMenuApi = () => {
  return apiClient.get<null, MenuResponse>('/my/menus')
}

export const updateUserInfoApi = (userInfo: FormData) => {
  return apiClient.put<null, ApiResponse>('/my/userinfo', userInfo)
}

export const updatePwdApi = (data: FormData) => {
  return apiClient.patch<null, ApiResponse>('/my/updatepwd', data)
}
