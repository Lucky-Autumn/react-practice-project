import type { LoginValues } from '@/types/user'
import type { Response } from '@/utils/request'
import request from '@/utils/request'

type LoginResponse = Response<string>

export const login = (data: LoginValues) => {
  return request.post<LoginResponse>('/users/login', data)
}
