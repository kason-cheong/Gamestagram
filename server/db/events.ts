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
