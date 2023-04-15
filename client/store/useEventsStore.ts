import { create } from 'zustand'
import { getEvents } from '../apis/apiClientEvents'
import type { Event, FormattedEventWithUser } from '../../models/Event'

interface IEvent {
  events: FormattedEventWithUser[]
  fetchEvents: () => void
  setFilterEvents:(filteredEvents:FormattedEventWithUser[])=>void
}

export const useEventsStore = create<IEvent>((set) => ({
  events: [] as FormattedEventWithUser[],
  fetchEvents: async () => {
    const events = await getEvents()
    set({ events: events })
  },
  setFilterEvents: (filteredEvents:FormattedEventWithUser[]) => {
    set({events:filteredEvents})
  }
}))
