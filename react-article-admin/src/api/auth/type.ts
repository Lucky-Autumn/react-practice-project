import type { ApiResponse } from '..'

export interface LoginResponse extends ApiResponse {
  token: string
}
