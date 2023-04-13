import connection from './connection'
import type { User } from '../../models/Users'

export function getUsers(db = connection): Promise<User[]> {
  return db('users').select()
}

export function getUsersById(id:number, db = connection): Promise<User[]> {
  return db('users').select().where('id', id)
}