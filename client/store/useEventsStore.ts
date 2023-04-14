import { create } from 'zustand'
import { getEvents } from '../apis/apiClientEvents'
import type { Event } from '../../models/Event'




interface IEvent{
  events: Event[]
  fetchEvents: () => void
}

export const useEventsStore = create<IEvent>((set) => ({
  events: [] as Event[],
  fetchEvents: async () => {
    const events = await getEvents() as Event[]
    set({events:events})
  },
 
}))