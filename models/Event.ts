export interface EventDB {
  hostId: number
  gameId: number
  eventName: string
  location: string
  time: string
  gameName: string
  description: string
  numberOfPeople: number
  createdAt: string
  gamePhoto: string
  userId: number
  userName: string
  photoUrl: string
}

export interface Event extends EventDB {
  eventId: number
}

export interface EventUser {
  userId: number
  name: string
  photoUrl: string
}

export interface FormattedEventWithUser {
  eventId: number
  hostId: number
  eventName: string
  gameId: number
  location: string
  time: string
  description: string
  numberOfPeople: number
  createdAt: string
  gameName: string
  gamePhoto: string
  users: EventUser[]
}
