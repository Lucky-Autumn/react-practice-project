import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { useUserStore } from './userStore'

type AppState = {
  token: string
  collapsed: boolean
  setToken: (token: string) => void
  setCollapsed: (collapsed: boolean) => void
  logout: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    immer((set) => ({
      token: '',
      collapsed: false,
      setToken: (token: string) => {
        set((state) => {
          state.token = token
        })
      },
      setCollapsed: (collapsed: boolean) => {
        set((state) => {
          state.collapsed = collapsed
        })
      },
      logout: () => {
        set((state) => {
          state.token = ''
          state.collapsed = false
          useUserStore.getState().clearUser()
        })
      },
    })),
    {
      name: 'app-storage',
      partialize: (state) => ({
        token: state.token,
        collapsed: state.collapsed,
      }),
    },
  ),
)
