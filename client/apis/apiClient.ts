import request from 'superagent'
import { EventDB } from '../../models/Event'

const rootUrlEvents = '/api/v1/events'
const rootUrlUsers = '/api/v1/users'

export async function  getEvents() {
  const res = await request.get(rootUrlEvents)
 console.log(res.body.events)
 return res.body.events as Promise<Event[]>

  }


export async function addEvents(event:EventDB) {
 return await request.post(rootUrlEvents).send(event)
  }



  export async function deleteEvent(id: number) {
    await request.delete(`${rootUrlEvents}/${id}`)
  }
  

export async function updateEvent(id:number, input:EventDB){
  return await request.post(`${rootUrlEvents}/${id}`).send(input)

}