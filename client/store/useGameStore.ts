import { create } from 'zustand'

import type { GameDB, Game } from '../../models/Game'
import { getGames } from '../apis/apiClientGames'

interface IGame {
  games: Game[]
  fetchGames: () => void
}

export const useGameStore = create<IGame>((set) => ({
  games: [] as Game[],
  fetchGames: async () => {
    const games = await getGames()
    set({ games: games })
  },
}))
