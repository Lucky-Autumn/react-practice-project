export type User = {
  readonly id: number
  username: string
  nickname?: string
  email?: string
  user_pic?: string
}

import type { ReactNode } from 'react'

// 后端返回的菜单项类型（icon 为字符串）
export type RawMenuItem = {
  readonly key: string
  title?: string
  label: string
  icon?: string
  children?: RawMenuItem[]
}

// 前端使用的菜单项类型（icon 为 ReactNode）
export type MenuItem = {
  readonly key: string
  title?: string
  label: string
  icon: ReactNode
  children?: MenuItem[]
}

export type UserInfoValues = {
  readonly id: number
  nickname?: string
  email?: string
}
