import { EventUser, Event } from '../../models/Event'

export function createEvent(eventLine: Event) {
  return {
    id: eventLine.id,
    time: eventLine.time,
    gameId: eventLine.gameId,
    hostId: eventLine.hostId,
    location: eventLine.description,
    eventName: eventLine.eventName,
    numberOfPeople: eventLine.numberOfPeople,
    createdAt: eventLine.createdAt,
    description: eventLine.description,
    gameName: eventLine.gameName,
    gamePhoto: eventLine.gamePhoto,
    users: [createUser(eventLine)],
  }
}

export interface FormattedEventWithUser {
  id: number
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

export function createUser(eventLine: Event) {
  return {
    id: eventLine.userId,
    name: eventLine.userName,
    photoUrl: eventLine.photoUrl,
  }
}

export function formatEvent(eventLines: Event[]) {
  let event: FormattedEventWithUser | undefined
  eventLines.forEach((item) => {
    !event ? (event = createEvent(item)) : event.users.push(createUser(item))
  })
  return event
}

export function formatEventList(eventLines: Event[]) {
  const eventList = [] as FormattedEventWithUser[]
  eventLines.forEach((item) => {
    const event = eventList.find((e) => e.id === item.id)
    !event
      ? eventList.push(createEvent(item))
      : (event.users = [createUser(item)])
  })
  return eventList
}
