import connection from './connection'
import type { Event } from '../../models/Event'

export function getEvents(db = connection): Promise<Event[]> {
  return db('events').select()
}

export function getEventsById(id: number, db = connection): Promise<Event[]> {
  return db('events').select().where("id", id)
}

