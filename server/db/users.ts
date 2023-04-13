import connection from './connection'
import type {} from '../../models/Fruit'

export function getFruits(db = connection): Promise<Fruit[]> {
  return db('').select()
}
