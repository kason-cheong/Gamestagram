import connection from './connection'
import type { Game,GameSnake } from '../../models/Game'

export function getGames(db = connection): Promise<Game[]> {
  return db('games').select(
    'id',
    'name',
    'description',
    'number_player as playerCount',
    'play_time as averagePlayTime',
    'photo_url as photoUrl'
  )
}

export function getGamesById(id: number, db = connection): Promise<Game[]> {
  return db('games')
    .select(
      'id',
      'name',
      'description',
      'number_player as playerCount',
      'play_time as averagePlayTime',
      'photo_url as photoUrl'
    )
    .where('id', id)
}

export function addGame(newGame:GameSnake,db=connection) {
  return db('games').insert(newGame)
}
