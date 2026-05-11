import type { MenuItem, RawMenuItem } from '@/types/user'
import {
  AppstoreOutlined,
  FileAddOutlined,
  FileTextOutlined,
  HomeOutlined,
  KeyOutlined,
  PictureOutlined,
  ProfileOutlined,
  ReadOutlined,
  SolutionOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { type ReactNode } from 'react'

const iconMap: Record<string, React.ComponentType> = {
  HomeOutlined,
  ReadOutlined,
  AppstoreOutlined,
  ProfileOutlined,
  FileAddOutlined,
  FileTextOutlined,
  UserOutlined,
  SolutionOutlined,
  PictureOutlined,
  KeyOutlined,
}

export function getIconComponent(iconName?: string): ReactNode {
  if (!iconName) return null
  const Icon = iconMap[iconName]
  return Icon ? <Icon /> : null
}

export const getMenuIcon = (menus: RawMenuItem[]): MenuItem[] => {
  return menus
    .filter((menu) => !menu.key?.includes(':'))
    .map((menu) => {
      const mappedIcon = getIconComponent(menu.icon)
      return {
        ...menu,
        icon: mappedIcon,
        children: menu.children ? getMenuIcon(menu.children) : undefined,
      }
    })
}
