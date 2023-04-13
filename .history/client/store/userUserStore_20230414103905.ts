import { create } from 'zustand'

interface NewUser{
  id: number
  user
}

export const useUserStore = create((set) => ({
  currentUser: {
    id:0,
    userName:''
    
  },
  setUser: (newUser) =>
    set((state) => ({
      currentUser: {
        ...state.currentUser,
        ...newUser,
      },
    })),
}))