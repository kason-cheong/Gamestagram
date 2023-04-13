import { create } from 'zustand'

interface NewUser{
  id: number
  userName: string
  bio:string
}

interface IUser{
  currentUser: NewUser
  setUser: (newUser:) => void
 
}

export const useUserStore = create<IUser>((set) => ({
  currentUser: {
    id:0,
    userName:'',
    bio:''
  },
  setUser: (newUser:NewUser) =>
    set((state) => ({
      currentUser: {
        ...state.currentUser,
        ...newUser,
      },
    })),
}))