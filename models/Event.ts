export interface EventDB {
  
  hostId: number
  gameId:number
  time: string
  eventName: string
  gameName: string
  location: string
  description: string
  numberOfPeople: number
  createdAt:string
}


export interface Event extends EventDB {
  eventId: number
}
