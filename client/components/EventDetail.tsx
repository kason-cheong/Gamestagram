import { useEventStore } from '../store/useEventStore'

import { shallow } from 'zustand/shallow'
import { useEffect } from 'react'

import { useParams } from 'react-router-dom'

function EventDetail() {
  const { id } = useParams()
  const { event } = useEventStore(
    (state) => ({
      event: state.event,
      fetchEvent: () => state.fetchEvent(Number(id)),
    }),
    shallow
  )

  // {`${event.gamePhoto}`}
  // https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1540147295104
  return (
    <>
      <div className="border-black">
        <img
          src="https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1540147295104"
          alt=""
        />
      </div>
      <div className="flex">
        {event.users.map((user) => {
          return (
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              key={user.name}
              src={`${user.photoUrl}`}
              alt={`${user.name}`}
            />
          )
        })}
      </div>
      <div className="border-black">
        <ul>
          <li>Event Name: {event.eventName}</li>
          <li>Game Name: {event.gameName}</li>
          <li>Description: {event.description}</li>
          <li>Location: {event.location}</li>
          <li>Time: {event.time}</li>
          <li>Number of People: {event.numberOfPeople}</li>
        </ul>
      </div>
    </>
  )
}

export default EventDetail
