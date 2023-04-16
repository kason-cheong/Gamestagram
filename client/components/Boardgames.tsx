import { useEffect } from 'react'
import ImageBanner from './subcomponents/ImageBanner'
import GameCard from './GameCard'
import { useGamesStore } from '../store/useGamesStore'
import { shallow } from 'zustand/shallow'

export default function Boardgames() {
  const { games, fetchGames } = useGamesStore(
    (state) => ({ games: state.games, fetchGames: state.fetchGames }),
    shallow
  )
  useEffect(() => {
    fetchGames()
  }, [])

  return (
    <>
      <ImageBanner name="Boardgames" url="./pics/banner2.webp" />
      <div className="mt-36 mx-auto w-4/5">
        <section className="flex mt-32">
          {games[0] ? (
            games.map((game) => <GameCard key={game.name} game={game} />)
          ) : (
            <h1>Game is not found, please search again.</h1>
          )}
        </section>
      </div>
    </>
  )
}
