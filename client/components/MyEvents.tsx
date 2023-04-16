import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getEventsByUserId, getEventsByHostId } from '../apis/apiClientEvents'
import MyHostEventCard from './MyHostEventCard'
import MyAttendEventCard from './MyAttendEventCard'
import { useAuth0 } from '@auth0/auth0-react'
import { useUserStore } from '../store/useUserStore'

const MyEvents = () => {
  const { id } = useParams()
  const currentUser = useUserStore((state) => state.currentUser)
  const { isAuthenticated } = useAuth0()

  const [myHostEvents, setMyHostEvents] = useState([])
  const [myattendEvents, setMyattendEvents] = useState([])

  useEffect(() => {
    fetchMyattendEvents(Number(id))
    fetchHostEvents(Number(id))
  }, [myHostEvents.length, myattendEvents.length])

  async function fetchMyattendEvents(id: number) {
    const events = await getEventsByUserId(id)
    setMyattendEvents(events)
  }

  async function fetchHostEvents(id: number) {
    const events = await getEventsByHostId(id)
    setMyHostEvents(events)
  }

  return (
    <>
      {isAuthenticated ? (
        <div className="mx-auto w-4/5">
          <h1 className="text-2xl font-bold my-3">My Events</h1>
          <h2 className="text-xl font-semibold mb-2 text-blue-400">
            {myHostEvents.length ? 'hosting Events' : null}
          </h2>
          {myHostEvents.map((event) => (
            <MyHostEventCard event={event} />
          ))}

          <h2 className="text-xl font-semibold mb-2 text-blue-400">
            {!myattendEvents.length && "No attending Events"}
          </h2>

          {myattendEvents.map((event) => (
            <MyAttendEventCard event={event} />
          ))}
        </div>
      ) : (
        <h1>Please sign in</h1>
      )}
    </>
  )
}

export default MyEvents
