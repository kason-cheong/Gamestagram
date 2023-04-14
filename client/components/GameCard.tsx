import { Game } from '../../models/Game'

function GameCard({ game }: { game: Game }) {
  return (
    <section className=" bg-slate-200 w-1/5 rounded-2xl shadow-2xl shadow-slate-400 ml-12">
      <img
        src={`${game.photoUrl}`}
        alt={`${game.name}`}
        className="rounded-t-2xl"
      />

      <div className="p-2 text-center">
        <h4 className="text-orange-900 mb-2">{game.name}</h4>
        <p className="font-semibold mb-1">{game.description}</p>
        <p className="italic mb-1">{game.averagePlayTime}</p>
        <p>{game.playerCount}</p>
      </div>
    </section>
  )
}

export default GameCard
