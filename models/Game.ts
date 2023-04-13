export interface GameDB {
  name: string
  description: string
  averagePlayTime: string
  playerCount: number
  photoUrl: string
}

export interface Game extends GameDB {
  id: number
}
