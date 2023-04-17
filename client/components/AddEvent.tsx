import { useEffect, useState } from 'react'
import { addEvents } from '../apis/apiClientEvents'
import { getGames } from '../apis/apiClientGames'
import { useUserStore } from '../store/useUserStore'
import { Game } from '../../models/Game'
import { Autocomplete, TextField } from '@mui/material'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

export function Addevent() {
  const navigate = useNavigate()
  const [isAdd, setAdd] = useState(false)
  const currentUser = useUserStore((state) => state.currentUser)
  const [games, setGames] = useState<Game[]>([])
  const [selectedGameId, setSelectedGameId] = useState<number | null>(null)
  const [gameName, setGameName] = useState('')
  const [filteredGames, setFilteredGames] = useState<Game[]>(games)
  const [address, setAddress] = useState('')
  const options = {
    types: ['geocode'],
    componentRestrictions: { country: 'nz' },
  }
  useEffect(() => {
    async function getGame() {
      try {
        const data = await getGames()

        setGames(data)
      } catch (error) {
        console.error('Error fetching games:', error)
      }
    }
    getGame()
  }, [])
  useEffect(() => {
    const filtered = games.filter((game) =>
      game.name.toLowerCase().includes(gameName.toLowerCase())
    )
    setFilteredGames(filtered)
  }, [games, gameName])
  useEffect(() => {
    const input = document.getElementById('autocomplete')
    const autocomplete = new google.maps.places.Autocomplete(input, options)

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace()

      setAddress(place.formatted_address)
    })
  }, [])
  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value)
  }

  const handleGameChange = (
    event: React.SyntheticEvent<Element, Event>,
    game: Game
  ) => {
    if (game) {
      setSelectedGameId(game.id)
      setGameName(game.name)
    } else {
      setSelectedGameId(null)
      setGameName('')
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!selectedGameId) {
      alert('Please select a valid game.')
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    const eventName = formData.get('eventName') as string

    const description = formData.get('description') as string
    const numberPpl = formData.get('numberPpl') as string
    const hostId = currentUser.id
    const time = formData.get('time') as string
    const date = formData.get('date') as string
    const FormattedDate = moment(date, 'YYYY-MM-DD').format('DD-MM-YYYY')
    const timeDb = `${FormattedDate} ${time}`

    const newEvent = {
      event_name: eventName,
      host_id: hostId, // need to repalce this with daynmci variable
      description,
      number_ppl_playing: numberPpl,
      game_id: selectedGameId,
      location: address,
      time: timeDb,
    }

    await addEvents(newEvent)
    setAdd(true)
    navigate('/my-events')
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
              <div>
                <Autocomplete
                  disablePortal
                  value={
                    filteredGames.find((game) => game.id === selectedGameId) ||
                    null
                  }
                  id="gameName"
                  options={filteredGames}
                  getOptionLabel={(game) => game.name}
                  onChange={handleGameChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Game Name"
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                    />
                  )}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="gameName"
                />
              </div>
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
                  <label htmlFor="date">Choose a date:</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  ></input>
                  <label htmlFor="time">Choose a time:</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  ></input>
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
                  <input
                    type="text"
                    id="autocomplete"
                    name="location"
                    value={address}
                    onChange={handleAddressChange}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your address"
                  />
                </div>
                <p>{address}</p>

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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
