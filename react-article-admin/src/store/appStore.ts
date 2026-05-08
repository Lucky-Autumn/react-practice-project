import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type AppState = {
  token: string;
  setToken: (token: string) => void;
};

export const useAppStore = create<AppState>()(
  persist(
    immer((set) => ({
      token: "",
      setToken: (token: string) => {
        set((state) => {
          state.token = token;
        });
      },
    })),
    {
      name: "app-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ token: state.token }),
    },
  ),
);
