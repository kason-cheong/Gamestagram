import connection from './connection'
import type { Event } from '../../models/Event'

export function getEvents(db = connection): Promise<Event[]> {
  return db('events').select()
}