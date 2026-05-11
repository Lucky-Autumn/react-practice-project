import { type MenuItem } from '@/types/user'
import { matchPath } from 'react-router'

type BreadcrumbItem = {
  title: string
}

export const getBreadcrumbItems = (
  menus: MenuItem[] | undefined,
  nowPath: string,
  breadcrumbItems: BreadcrumbItem[] = [],
): BreadcrumbItem[] | undefined => {
  if (!menus) return
  for (const item of menus) {
    const matchResult = matchPath(item.key, nowPath)
    if (matchResult) {
      breadcrumbItems.unshift({ title: item.label })
      return breadcrumbItems
    }

    if (item.children) {
      // result 有两种结果：
      // 1. 找到了，那么 result 是一个数组，转为布尔值以后是 true
      // 2. 没找到子节点，那么 result 是 undefined，转为布尔值以后是 false
      const result = getBreadcrumbItems(item.children, nowPath, breadcrumbItems)
      if (result) {
        // 追加父节点
        breadcrumbItems.unshift({ title: item.label })
        return breadcrumbItems
      }
    }
  }
}
