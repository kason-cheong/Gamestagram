import request from 'superagent'
import { User, UserDB } from '../../models/Users'

const rootUrlUsers = '/api/v1/users'

interface EditUser {
  userName: string
  bio: string
}
interface snakeCaseUser {
  user_name: string
  email: string
  auth0_Id: string
  bio: string
  photo_url: string
}

export async function getUserById(id: number) {
  const res = await request.get(`${rootUrlUsers}/${id}`)
  console.log(res.body)
  return res.body as Promise<User>
}

export async function editUserById(id: number, input: EditUser) {
  return await request.post(`${rootUrlUsers}/${id}`).send(input)
}
export async function addUser(user: snakeCaseUser) {
  return await request.post(`${rootUrlUsers}/add`).send(user)
}

export async function getUserByAuth0Id(authId: string) {
  const res = await request.get(`${rootUrlUsers}/auth0/${authId}`)
  console.log(res.body)
  return res.body as Promise<User>
}
