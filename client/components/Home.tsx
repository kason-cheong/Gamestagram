import EventCard from './EventCard'
import GameCard from './GamesCard'
import { useEventsStore } from '../store/useEventsStore'
import { shallow } from 'zustand/shallow'
import { useEffect } from 'react'

function Home() {
  const { events, fetchEvents } = useEventsStore(
    (state) => ({ events: state.events, fetchEvents: state.fetchEvents }),
    shallow
  )

  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <main className="container mx-auto">
      <h2 className="mt-5 mb-5 font-sans text-2xl font-bold text-center md:text-left">
        Events
      </h2>

      <section className="flex flex-wrap">
        {events.map((event) => (
          <EventCard key={event.eventId} event={event} />
        ))}
      </section>

      <h2 className="mt-5 mb-5 font-sans text-2xl font-bold text-center md:text-left">
        Popular Games
      </h2>

      <section className="flex flex-wrap">
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </section>
    </main>
  )
}

export default Home
