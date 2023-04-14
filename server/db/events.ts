import connection from './connection'
import type { Event } from '../../models/Event'

export function getEvents(db = connection): Promise<Event[]> {
  return db('events').select(
    'id as eventId',
    'host_id as hostId',
    'game_id as gameId',
    'event_name as eventName',
    'number_ppl_playing as numberOfPeople',
    'created_at as createdAt',
    'time',
    'location',
    'description'
  )
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
