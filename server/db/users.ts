import connection from './connection'
import type { User } from '../../models/Users'

export function getUsers(db = connection): Promise<User[]> {
  return db('users').select()
}

export function getUsersById(id:number, db = connection): Promise<User[]> {
  return db('users').select().where('id', id)
}

export function addUser(data: User, db = connection): Promise<User[]> {
  const timestamp = new Date(Date.now())
  const newData = {...data, singed_up_at: timestamp }
  return db('users').insert(newData)
}