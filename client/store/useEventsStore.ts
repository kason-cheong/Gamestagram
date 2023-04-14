import { create } from 'zustand'
import { getEvents } from '../apis/apiClientEvents'
import type { Event, FormattedEventWithUser } from '../../models/Event'

interface IEvent {
  events: FormattedEventWithUser[]
  fetchEvents: () => void
}

export const useEventsStore = create<IEvent>((set) => ({
  events: [] as FormattedEventWithUser[],
  fetchEvents: async () => {
    const events = await getEvents()
    set({ events: events })
  },
}))
