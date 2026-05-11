import { getMenuApi } from '@/api/user'
import { useUserStore } from '@/store/userStore'
import { to } from 'await-to-js'

export const loader = async () => {
  // 模拟加载用户信息的过程
  await useUserStore.getState().fetchUser()
  const [menuError, menuData] = await to(getMenuApi())
  if (menuError) {
    return null
  }

  return {
    menus: menuData?.data || [],
  }
}
