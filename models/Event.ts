export interface EventDB {
  hostId: number
  gameId: number
  eventName: string
  location: string
  time: string
  description: string
  numberOfPeople: number
  createdAt: string
  gameName: string
  gamePhoto: string
  userId: number
  userName: string
  photoUrl: string
}

export interface Event extends EventDB {
  id: number
}

export interface EventUser {
  id: number
  name: string
  photoUrl: string
}

export interface FormattedEventWithUser {
  id: number
  hostId: number
  eventName: string
  gameId: number
  location: string
  time: string
  description: string
  numberOfPeopel: number
  createdAt: string
  numberOfPeople: number
  gameName: string
  gamePhoto: string
  users: EventUser[]
}
