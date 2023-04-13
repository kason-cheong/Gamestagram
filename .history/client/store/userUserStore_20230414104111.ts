import { create } from 'zustand'

interface NewUser{
  id: number
  userName: string
  bio:string
}

interface IUser{
  currentUser: 
  fetchReview: () => void
  addReview: (newReview: ReviewData) => void
  deleteReview: (id: number) => void
  updateReview:(updatedReview:Review)=>void
}

export const useUserStore = create((set) => ({
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