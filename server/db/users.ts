import connection from './connection'
import type { User, UserDB } from '../../models/Users'

export function getUsers(db = connection): Promise<User[]> {
  return db('users').select('photo_url as photoUrl', '')
}

export function getUsersById(id: number, db = connection): Promise<User[]> {
  return db('users')
    .select(
      'id',
      'user_name as username',
      'email',
      'bio',
      'photo_url as photoUrl',
      'singed_up_at as signedUpAt'
    )
    .where('id', id)
}

export function addUser(data: UserDB, db = connection): Promise<User[]> {
  const timestamp = new Date(Date.now())
  const newData = { ...data, singed_up_at: timestamp }

  return db('users').insert(newData)
}

export function getUsersByAuthId(
  authId: string,
  db = connection
): Promise<User[]> {
  return db('users')
    .select(
      'id',
      'user_name as username',
      'email',
      'bio',
      'photo_url as photoUrl',
      'singed_up_at as signedUpAt',
      'auth0_Id as authId'
    )
    .where('auth0_Id', authId)
    .first()
}
