import { create } from 'zustand'
import { getEventById} from '../apis/apiClientEvents'
import type {
  FormattedEventWithUser,
  EventUser,
} from '../../models/Event'

interface IEvent {
  event: FormattedEventWithUser
  fetchEvent: (id: number) => void
}

export const useEventStore = create<IEvent>((set) => ({
  event: {
    eventId: 0,
    hostId: 0,
    eventName: '',
    gameId: 0,
    location: '',
    time: '',
    description: '',
    numberOfPeople: 0,
    createdAt: '',
    gameName: '',
    gamePhoto: '',
    users: [] as EventUser[],
  },

  fetchEvent: async (id: number) => {
    const event = (await getEventById(id)) as FormattedEventWithUser
    // console.log(event)

    set({
      event,
    })
  },
}))
