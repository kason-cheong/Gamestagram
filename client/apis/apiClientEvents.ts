import request from 'superagent'
import {
  EventDB,
  Event,
  FormattedEventWithUser,
  UserJoinEvent,
} from '../../models/Event'

const rootUrlEvents = '/api/v1/events'

export async function getEvents() {
  const res = await request.get(rootUrlEvents)

  return res.body as Promise<FormattedEventWithUser[]>
}

export async function getEventById(id: number) {
  const res = await request.get(`${rootUrlEvents}/${id}`)

  return res.body as Promise<FormattedEventWithUser>
}

export async function getEventsByUserId(id: number) {
  const res = await request.get(`${rootUrlEvents}/my-events/user/${id}`)
  return res.body 
}

export async function getEventsByHostId(id: number) {
  const res = await request.get(`${rootUrlEvents}/my-events/host/${id}`)
  return res.body 
}


export async function addEvents(event: EventDB) {
  return await request.post(rootUrlEvents).send(event)
}

export async function cancelEvent(id: number) {
  await request.delete(`${rootUrlEvents}/my-events/${id}`)
}

export async function updateEvent(id: number, input: EventDB) {
  return await request.post(`${rootUrlEvents}/${id}`).send(input)
}

export async function addUserEvent(input: UserJoinEvent) {
  await request.post(`${rootUrlEvents}/add/user-event`).send(input)
}
