import request from 'superagent'
import { GameDB, Game } from '../../models/Game'

const rootUrlGames = '/api/v1/games'

export async function getGames() {
  const res = await request.get(rootUrlGames)

  return res.body as Promise<Game[]>
}

export async function getGameById(id: number) {
  const res = await request.get(`${rootUrlGames}/${id}`)

  return res.body as Promise<Game>
}
