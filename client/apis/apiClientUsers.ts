import request from 'superagent'
import { User } from '../../models/Users'

const rootUrlUsers = '/api/v1/users'

interface EditUser {
  userName: string
  bio: string
}

export async function getUserById(id: number) {
  const res = await request.get(`${rootUrlUsers}/${id}`)

  return res.body as Promise<User>
}

export async function editUserById(id: number, input: EditUser) {
  return await request.post(`${rootUrlUsers}/${id}`).send(input)
}

