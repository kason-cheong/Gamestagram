import connection from './connection'
import type { Event } from '../../models/Event'
import { formatEventList } from '../public/formatter'

export function getEvents(db = connection): Promise<FormattedEventWithUser[]> {
  return db('user_event')
    .join('events', 'user_event.event_id', 'events.id')
    .join('user', 'user_event.user_id', 'user.id')
    .select(
      'events.id as eventId',
      'events.host_id as hostId',
      'users.id as userId',
      'users.name as userName',
      'games.id as gameId',
      'game_name as gameName',
      'games.photo_url as gamePhoto',
      'events.name as eventName',
      'events.number_ppl_playing as numberOfPeople',
      'events.created_at as createdAt',
      'time',
      'location',
      'description',
      'users.photo_url as photoUrl'
    )
    .then((orderLines) => formatEventList(orderLines))
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

export function getEventsById(id: number, db = connection): Promise<Event[]> {
  return db('events').select().where('id', id)
}

export function addEvent(data: Event, db = connection): Promise<Event[]> {
  const timestamp = new Date(Date.now())
  const newData = { ...data, created_at: timestamp }
  return db('events').insert(newData)
}

export function editEvent(
  id: number,
  data: Event,
  db = connection
): Promise<Event[]> {
  return db('events').update(data).where('id', id).returning('*')
}
