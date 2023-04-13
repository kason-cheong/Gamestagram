export interface EventDB {
  
  hostId: number
  gameId: number
  name: string
  location: string
  time: string
  description: string
  numberOfPeople: number
}


export interface Event extends EventDB {
  id: number
}
