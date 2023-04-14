import request from 'superagent'
import { EventDB, Event } from '../../models/Event'

const rootUrlEvents = '/api/v1/events'


export async function  getEvents() {
  const res = await request.get(rootUrlEvents)
 console.log(res.body)
 return res.body as Promise<Event[]>

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