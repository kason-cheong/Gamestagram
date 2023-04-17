import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getEventsByUserId} from '../apis/apiClientEvents'
import MyHostEventCard from './MyHostEventCard'
import MyAttendEventCard from './MyAttendEventCard'
import { useAuth0 } from '@auth0/auth0-react'
import { useUserStore } from '../store/useUserStore'
import { MyEvent } from '../../models/Event'



const MyEvents = () => {
  // const { id } = useParams()
  const currentUser = useUserStore((state) => state.currentUser) 
  const { isAuthenticated,isLoading } = useAuth0()

  const [myEvents, setMyEvents] = useState([]as MyEvent[])

  
  useEffect(() => {
    if (currentUser.id !== 0) {
      
      fetchMyEvents(currentUser.id)

      
    }

  }, [currentUser.id])

  async function fetchMyEvents(id: number) {
    const events = await getEventsByUserId(id)
    setMyEvents(events)
  }

  

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {isAuthenticated && !isLoading ? (
        <div className="mx-auto w-4/5">
          <h1 className="text-2xl font-bold my-3">My Events</h1>
          <div className='flex justify-end'><Link to={'/events/add'}><button className="px-6 py-2 bg-purple-200 rounded-2xl my-3">Create an Event</button></Link></div>
          <h2 className="text-xl font-semibold mb-2 text-blue-400">
            {!myEvents.length && "NO EVENTS"}
          </h2>
          {myEvents.map((event) => {
            if (event.hostId === event.userId) {
              return <MyHostEventCard event={event} fetchMyEvents={fetchMyEvents} />
            } else {
              return <MyAttendEventCard event={event} fetchMyEvents={fetchMyEvents} />
            }
          }
            
          
          )}
        </div>
      ) : !isLoading && (
        <h1>Please sign in</h1>
      )}
    </>
  )
}

export default MyEvents
