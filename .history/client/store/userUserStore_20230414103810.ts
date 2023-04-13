import { create } from 'zustand'

export const useUserStore = create((set) => ({
  currentUser: {
    id:0,
    username:
    
  },
  setUser: (newUser) =>
    set((state) => ({
      currentUser: {
        ...state.currentUser,
        ...newUser,
      },
    })),
}))