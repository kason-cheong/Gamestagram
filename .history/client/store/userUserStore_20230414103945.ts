import { create } from 'zustand'

interface NewUser{
  id: number
  userName: string
  bio:string
}

export const useUserStore = create((set) => ({
  currentUser: {
    id:0,
    userName:'',
    bio:''
  },
  setUser: (newUser:) =>
    set((state) => ({
      currentUser: {
        ...state.currentUser,
        ...newUser,
      },
    })),
}))