import { getUserInfoApi } from '@/api/user'
import type { User, UserInfoValues } from '@/types/user'
import to from 'await-to-js'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type UserStore = {
  user: User | null
  setUser: (user: User) => void
  fetchUser: () => Promise<void>
  getUserInfo: () => UserInfoValues
  getAvatar: () => string
  clearUser: () => void
}

export const useUserStore = create<UserStore>()(
  persist(
    immer((set, get) => ({
      user: null,
      setUser: (user: User) => {
        set((state) => {
          state.user = user
        })
      },
      fetchUser: async () => {
        // 这里可以调用接口获取用户信息，并更新状态
        const [err, userInfo] = await to(getUserInfoApi())
        if (err) {
          return
        }
        set((state) => {
          if (userInfo.data) {
            state.user = userInfo.data
          }
        })
      },
      getUserInfo: () => {
        return {
          id: get().user?.id || 0,
          nickname: get().user?.nickname || '',
          email: get().user?.email || '',
        }
      },
      getAvatar: () => {
        return get().user?.user_pic || ''
      },
      clearUser: () => {
        set((state) => {
          state.user = null
        })
      },
    })),
    {
      name: 'user-storage',
      partialize: (state) => ({
        user: state.user,
      }),
    },
  ),
)
