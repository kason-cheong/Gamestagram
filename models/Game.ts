export interface GameDB {
  name: string
  description: string
  averagePlayTime: string
  playerCount: string
  photoUrl: string
}

export interface Game extends GameDB {
  id: number
}


