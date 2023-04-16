import { useState, useEffect } from 'react'
import { EditEvent } from '../../models/Event'
import { updateEvent, getEventById } from '../apis/apiClientEvents'
import { useParams, useNavigate } from 'react-router-dom'

export default function EditEventPage() {
  const { id } = useParams()

  const nav = useNavigate()
  const [event, setEvent] = useState<EditEvent>({
    hostId: 0,
    time: '',
    eventName: '',
    location: '',
    description: '',
  })

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    getEventById(Number(id)).then((event) => {
      setEvent(event)
    })
  }, [])

  const [error, setError] = useState<string>('')
  const [success, setSuccess] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const newEvent = {
        id: id,
        host_id: event.hostId,
        time: event.time,
        event_name: event.eventName,
        location: event.location,
        description: event.description,
      }

      await updateEvent(Number(id), newEvent)
      setSuccess(true)
      setTimeout(() => {
        nav('/my-events')
      }, 1800)
    } catch (error) {
      setError('Failed to update event.')
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }))
  }

  return (
    <div className="max-w-md mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-5">Edit Event</h1>
      {error && <p className="text-red-500 mb-5">{error}</p>}
      {success && (
        <p className="text-green-500 mb-5">Event updated successfully!</p>
      )}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 border border-gray-300 p-4"
      >
        <div>
          <label htmlFor="time" className="block font-medium mb-2 ">
            Time:
          </label>
          <input
            type="text"
            id="time"
            name="time"
            value={event.time}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="eventName" className="block font-medium mb-2">
            Event Name:
          </label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={event.eventName}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="location" className="block font-medium mb-2">
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={event.location}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="description" className="block font-medium mb-2">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={event.description}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </form>
    </div>
  )
}
