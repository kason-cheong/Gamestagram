import request from 'superagent'
import { Game,GameSnake } from '../../models/Game'

const rootUrlGames = '/api/v1/games'
// let limit = ""
// let id=""

export async function getGames() {
  const res = await request.get(rootUrlGames)

  return res.body as Promise<Game[]>
}

export async function getGameByApiId(id: string) {
  const res = await request.get(`${rootUrlGames}/${id}`)

  return res.body as Promise<Game>
}

export async function getGamesFromAPI(limit:string|number) {
  const res = await request.get(
    `https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&client_id=NXgs9nuwJa&limit=${limit}`
  )
  console.log(res.body.games);
  
  return res.body.games
}

// export async function getGameFromAPI(apiId:string) {
//   const res = await request.get(
//     `https://api.boardgameatlas.com/api/search?id=${apiId}&client_id=NXgs9nuwJa`
//   )
//   console.log(res.body.games);
  
//   return res.body.games
// }

export async function addGame(newGame:GameSnake) {
  await request.post(`${rootUrlGames}/add`).send(newGame)
}
