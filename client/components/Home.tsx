import EventCard from './EventCard'
import GameCard from './GameCard'
import { useEventsStore } from '../store/useEventsStore'
import { useGameStore } from '../store/useGameStore'
import { shallow } from 'zustand/shallow'
import { useEffect } from 'react'
import ImageBanner from './subcomponents/ImageBanner'

function Home() {
  const { events, fetchEvents } = useEventsStore(
    (state) => ({ events: state.events, fetchEvents: state.fetchEvents }),
    shallow
  )

  const { games, fetchGames } = useGameStore(
    (state) => ({ games: state.games, fetchGames: state.fetchGames }),
    shallow
  )

  useEffect(() => {
    fetchEvents()
    fetchGames()
    fetchEvents()
  }, [])

  return (
    <>
      <ImageBanner name="Welcome to Gamestagram!" url="./pics/banner1.jpg" />
      <main className="container mx-auto">
        <h2 className="mt-5 mb-5 font-sans text-2xl font-bold text-center md:text-left">
          Events
        </h2>

        <section className="flex">
          {events.map((event) => (
            <EventCard key={event.eventId} event={event} />
          ))}
        </section>

        <h2 className="mt-5 mb-5 font-sans text-2xl font-bold text-center md:text-left">
          Popular Games
        </h2>

        <section className="flex flex-wrap">
          {games.map((game) => (
            <GameCard key={game.name} game={game} />
          ))}
        </section>
      </main>
    </>
  )
}

export default Home
