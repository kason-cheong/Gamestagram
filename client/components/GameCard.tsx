import { Game } from '../../models/Game'
import { motion } from 'framer-motion'

function GameCard({ game }: { game: Game }) {
  return (
    <motion.div
      className=" bg-slate-200 w-72 rounded-2xl shadow-2xl shadow-slate-400 ml-12"
      whileHover={{ scale: 1.2 }}
    >
      <img
        src={`${game.photoUrl}`}
        alt={`${game.name}`}
        className="rounded-t-2xl"
      />

      <div className="p-2 text-center">
        <h4 className="text-orange-900 mb-2 text-2xl">{game.name}</h4>
        <p className="font-semibold mb-1">{game.description}</p>
        <p className="italic mb-1">{game.averagePlayTime}</p>
        <p>{game.playerCount} players recommended</p>
      </div>
    </motion.div>
  )
}

export default GameCard
