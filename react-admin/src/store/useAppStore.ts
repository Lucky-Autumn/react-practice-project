import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type AppStore = {
  token: string
  collapsed: boolean
  setToken: (token: string) => void
  setCollapsed: (collapsed: boolean) => void
  logout: () => void
}

const useAppStore = create<AppStore>()(
  // 顺序：immer 包在最里面，persist 在外层
  persist(
    immer((set) => ({
      // 全局状态
      token: '',
      collapsed: false,
      setToken: (token) =>
        set((state) => {
          state.token = token
        }),
      logout: () =>
        set((state) => {
          state.token = ''
        }),
      setCollapsed: (collapsed) =>
        set((state) => {
          state.collapsed = collapsed
        }),
    })),
    // 持久化配置
    {
      name: 'app-store', // localStorage 唯一 key
    },
  ),
)

export default useAppStore
