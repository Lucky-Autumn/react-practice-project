import type { RawMenuItem, User } from '@/types/user'
import { type ApiResponse } from '..'

export type UserResponse = ApiResponse<User>
export type MenuResponse = ApiResponse<RawMenuItem[]>
