import { useEffect, useState } from 'react'
import { addEvents } from '../apis/apiClientEvents'
import { getGames } from '../apis/apiClientGames'
import { useUserStore } from '../store/useUserStore'
import { Game } from '../../models/Game'

export function Addevent() {
  const [isAdd, setAdd] = useState(false)
  const currentUser = useUserStore((state) => state.currentUser)
  const [games, setGames] = useState<Game[]>([])
  const [selectedGameId, setSelectedGameId] = useState<number>()
  const [gameName, setGameName] = useState('')
  const [filteredGames, setFilteredGames] = useState<Game[]>(games)

  useEffect(() => {
    async function getGame() {
      try {
        const data = await getGames()
        // const gameList = await data.json()
        setGames(data)
      } catch (error) {
        console.error('Error fetching games:', error)
      }
    }
    getGame()
  }, [])

  function handleGameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const gameName = event.target.value
    setGameName(gameName)
    const matchingGame = games.find((game) => game.name === gameName)
    if (matchingGame) {
      setSelectedGameId(matchingGame.id)
    } else {
      setSelectedGameId(undefined)
    }
    const filteredGames = games.filter((game) =>
      game.name.toLowerCase().includes(gameName.toLowerCase())
    )
    setFilteredGames(filteredGames)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const eventName = formData.get('eventName') as string
    // const gameId = formData.get('gameId') as string // need to change to  number
    const description = formData.get('description') as string
    const numberPpl = formData.get('numberPpl') as string
    const hostId = currentUser.id
    const location = formData.get('location') as string
    const time = formData.get('time') as string
    const newEvent = {
      event_name: eventName,
      host_id: 3, // need to repalce this with daynmci variable
      description,
      number_ppl_playing: numberPpl,
      game_id: selectedGameId,
      location,
      time,
    }
    console.log(newEvent)

    await addEvents(newEvent)
    setAdd(true)
  }
  return (
    <>
      {!isAdd ? (
        <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Add New Event
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="eventName" className="sr-only">
                    Event name
                  </label>
                  <input
                    type="text"
                    id="eventName"
                    name="eventName"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="eventName"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="sr-only">
                    Time
                  </label>
                  <textarea
                    id="time"
                    name="time"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="time"
                  />
                </div>
                <div>
                  <label htmlFor="description" className="sr-only">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="description"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="sr-only">
                    Location
                  </label>
                  <textarea
                    id="location"
                    name="location"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="location"
                  />
                </div>
                <div>
                  <label htmlFor="game" className="sr-only">
                    Game
                  </label>
                  <input
                    type="text"
                    id="game"
                    name="game"
                   
                    value={gameName}
                    onChange={handleGameChange}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="gameName"
                  />
                  {games.length > 0 && (
                    <select
                      id="gameId"
                      name="gameId"
                      required
                      value={selectedGameId}
                      onChange={(event) =>
                        setSelectedGameId(event.target.value)
                      }
                    >
                      <option value="">Select a game</option>{' '}
                      {games.map((game) => (
                        <option key={game.id} value={game.id}>
                          {game.name}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
                <div>
                  <label htmlFor="numberPpl" className="sr-only">
                    Number of people playing
                  </label>
                  <input
                    type="text"
                    id="numberPpl"
                    name="numberPpl"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="numberPpl"
                  />
                </div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900">
              You have added
            </h2>
          </div>
        </div>
      )}
    </>
  )
}