import type { MenuItem } from '@/types/user'

export const findOpenKey = (menus: MenuItem[], path: string): string | null => {
  for (const menu of menus) {
    if (menu.key === path) return null
    if (menu.children) {
      const found = menu.children.some((child) => child.key === path)
      if (found) return menu.key
      const nested = findOpenKey(menu.children, path)
      if (nested) return nested
    }
  }
  return null
}
