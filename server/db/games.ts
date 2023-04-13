import connection from './connection'
import type { Game } from '../../models/Game'

export function getGames(db = connection): Promise<Game[]> {
  return db('games').select()
}

export function getGamesById(id: number, db = connection): Promise<Game[]> {
  return db('games').select().where('id', id)
}
