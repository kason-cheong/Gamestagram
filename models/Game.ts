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

export interface GameSnake{
  name: string
  description: string
  play_time: string
  number_player: string
  photo_url: string
}


