import { create } from 'zustand'

interface NewUser{
  id:numberuser
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