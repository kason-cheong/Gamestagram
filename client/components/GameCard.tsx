import { Game } from '../../models/Game'
import { motion } from 'framer-motion'

function GameCard({ game }: { game: Game }) {
  return (
    <motion.div whileHover={{ scale: 1.2 }}>
      <div className=" bg-slate-200 rounded-2xl w-80 shadow-2xl shadow-slate-400 ml-12 mb-8">
        <div className=" h-56">
          <img
            src={`${game.photoUrl}`}
            alt={`${game.name}`}
            className=" rounded-t-2xl w-full h-full"
          />
        </div>
   
        <div className="p-2 text-center space-y-3"> 
        <h4 className="text-orange-900 mb-2 text-2xl">{game.name}</h4> 
        {game.description.slice(0,200)}
        <p className="italic"><b>Playtime:</b>{game.averagePlayTime}</p> 
        <p><b>players:</b>{game.playerCount}</p> 
        </div>
      </div>
    </motion.div>
  )
}

export default GameCard
