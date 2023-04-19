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

export function getGamesByApiId(id: string, db = connection): Promise<Game> {
  return db('games')
    .select(
      'id',
      'api_id',
      'name',
      'description',
      'number_player as playerCount',
      'play_time as averagePlayTime',
      'photo_url as photoUrl'
    )
    .where('api_id', id).first()
}

export function addGame(newGame:GameSnake,db=connection) {
  return db('games').insert(newGame)
}
