import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getEventsByUserId} from '../apis/apiClientEvents'
import MyHostEventCard from './MyHostEventCard'
import MyAttendEventCard from './MyAttendEventCard'
import { useAuth0 } from '@auth0/auth0-react'
import { useUserStore } from '../store/useUserStore'


interface MyEvent {
  eventId: number
  userId: number
  hostId:number
  userEventId: number
  eventName: string
  time: string
  location: string
}

const MyEvents = () => {
  // const { id } = useParams()
  const currentUser = useUserStore((state) => state.currentUser) 
  const { isAuthenticated,isLoading } = useAuth0()

  const [myEvents, setMyEvents] = useState([]as MyEvent[])

  
  useEffect(() => {
    if (currentUser.id !== 0) {
      
      fetchMyEvents(currentUser.id)
      console.log(currentUser.id);
      
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
          {/* <h2 className="text-xl font-semibold mb-2 text-blue-400">
            {myEvents.length ? 'hosting Events' : null}
          </h2> */}
          {myEvents.map((event) => {
            if (event.hostId === event.userId) {
              return <MyHostEventCard event={event} />
            } else {
              return <MyAttendEventCard event={event} />
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
