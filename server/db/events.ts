import connection from './connection'

import type { Event,EventDB,UserEventDB } from '../../models/Event'

import { formatEvent, formatEventList } from '../public/formatter'
import { FormattedEventWithUser } from '../../models/Event'

export function getEvents(db = connection): Promise<FormattedEventWithUser[]> {
  return db('user_event')
    .join('events', 'user_event.event_id', 'events.id')
    .join('users', 'user_event.user_id', 'users.id')
    .join('games', 'events.game_id', 'games.id')
    .select(
      'events.id as eventId',
      'events.host_id as hostId',
      'users.id as userId',
      'users.user_name as userName',
      'games.id as gameId',
      'games.name as gameName',
      'games.photo_url as gamePhoto',
      'events.event_name as eventName',
      'events.number_ppl_playing as numberOfPeople',
      'events.created_at as createdAt',
      'time',
      'location',
      'events.description as description',
      'users.photo_url as photoUrl'
    )
    .then((orderLines) => formatEventList(orderLines))
}

export function getEventsById(id: number, db = connection) {
  // ): Promise<FormattedEventWithUser>
  return db('user_event')
    .join('events', 'user_event.event_id', 'events.id')
    .join('users', 'user_event.user_id', 'users.id')
    .join('games', 'events.game_id', 'games.id')
    .select(
      'events.id as eventId',
      'events.host_id as hostId',
      'users.id as userId',
      'users.user_name as userName',
      'games.id as gameId',
      'games.name as gameName',
      'games.photo_url as gamePhoto',
      'events.event_name as eventName',
      'events.number_ppl_playing as numberOfPeople',
      'events.created_at as createdAt',
      'time',
      'location',
      'events.description as description',
      'users.photo_url as photoUrl'
    )
    .where('events.id', id)
    .then(formatEvent)
}


export function getEventsByUserId(id: number, db = connection) {
  return db('user_event')
    .join('events', 'user_event.event_id', 'events.id')
    .where('user_id', id)
    .select(
      'events.id as eventId',
      'user_event.user_id as userId',
      'user_event.id as userEventId',
      'events.event_name as eventName',
      'time',
      'location'
    )
}


export function getEventsByHostId(id: number, db = connection) {
  return db('events')
    .where('host_id', id)
    .select(
      'events.id as eventId',
      'events.host_id as hostId',
      'events.event_name as eventName',
      'time',
      'location'
    )
}


export function addEvent(data: EventDB, db = connection): Promise<number[]> {
  const timestamp = new Date(Date.now())
  const newData = { ...data, created_at: timestamp }
  return db('events').insert(newData)
}

export function addUserEvent(
  data: UserEventDB,
  db = connection
): Promise<number[]> {
  return db('user_event').insert(data)
}

export function editEvent(
  id: number,
  data: Event,
  db = connection
): Promise<Event[]> {
  return db('events').update(data).where('id', id).returning('*')
}



export function cancelEvent(id: number, db = connection) {
  return db('user_event').where('id',id).del()
}
