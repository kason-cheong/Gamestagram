import connection from './connection'
import type { Game } from '../../models/Game'

export function getGames(db = connection): Promise<Game[]> {
  return db('games').select()
}
