export interface UserDB {
  name: string
  email: string
  dateSignUp: string
  auth0Id: string
  bio: string
  photoUrl: string
}

export interface User extends UserDB {
  id: number
}
