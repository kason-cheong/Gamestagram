import EventCard from './EventCard'
import GameCard from './GamesCard'

function Home() {
  return (
    <main className="container mx-auto">
      <h2 className="mt-5 mb-5 font-sans text-2xl font-bold text-center md:text-left">
        Events
      </h2>

      <section className="flex flex-wrap">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
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
