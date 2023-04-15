import { create } from 'zustand'

import type { GameDB, Game } from '../../models/Game'
import { getGameById } from '../apis/apiClientGames'

interface IGame {
  game: Game
  fetchGame: (id: number) => void
}

export const useGameStore = create<IGame>((set) => ({
  game: {
    id: 0,
    name: '',
    description: '',
    averagePlayTime: '',
    playerCount: 0,
    photoUrl: '',
  },
  fetchGame: async (id: number) => {
    const game = await getGameById(id)
    set({ game: game })
  },
}))
