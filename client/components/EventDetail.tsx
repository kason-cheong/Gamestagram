import { useEventStore } from '../store/useEventStore'

import { shallow } from 'zustand/shallow'
import { getUserById} from '../apis/apiClientUsers'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { addUserEvent } from '../apis/apiClientEvents'
import { useGameStore } from '../store/useGameStore'

import ImageBanner from './subcomponents/ImageBanner'
import { Link } from 'react-router-dom'

import { useUserStore } from '../store/useUserStore'
import Map from './Map'

function EventDetail() {
  const currentUser = useUserStore((state) => state.currentUser)

  const [host, setHost] = useState({
    username: '',
    photoUrl: '',
  })

  const { id } = useParams()
  const { event, fetchEvent } = useEventStore(
    (state) => ({
      event: state.event,
      fetchEvent: () => state.fetchEvent(Number(id)),
    }),
    shallow
  )

  const { game, fetchGame } = useGameStore(
    (state) => ({ game: state.game, fetchGame: state.fetchGame }),
    shallow
  )

  useEffect(() => {
    fetchGame(event.gameId)
    fetchEvent()
    console.log(event.users)

    if (event.hostId) {
      fetchHost(event.hostId)
    }
  }, [event.hostId, currentUser.id])

  async function fetchHost(id: number) {
    const host = await getUserById(id)

    setHost(() => ({
      username: host.username,
      photoUrl: host.photoUrl,
    }))
  }

  async function handleSumbit() {
    if (currentUser.id !== 0) {
      await addUserEvent({ eventId: Number(id), userId: currentUser.id })
      fetchEvent()
    }
  }

  return (
    <>
      <ImageBanner name="Events" url="/pics/banner3.jpg" />
      <div className="w-4/5 flex flex-col mx-auto justify-center mt-4">
        <div className=" rounded-lg flex justify-center">
          <img
            className="rounded-2xl w-1/3"
            src={`${event.gamePhoto}`}
            alt={`${event.gameName}`}
          />
        </div>
        <div className="py-8 flex justify-center text-center mt-4">
          <ul>
            <li className=" font-pacifico text-3xl">{event.eventName}</li>
            <li className="italic text-lg"> {event.gameName}</li>
          </ul>
        </div>
        <div className="px-50 flex justify-around items-center">
          <div className="h-40 ">
            <div className="w-100">
              <div className="flex justify-around">
                <div className="flex flex-col text-align my-4  font-bold">
                  <ul>
                    <li>
                      <span className="">Description:</span>
                    </li>
                    <li>
                      <span className="">Location:</span>
                    </li>
                    <li>
                      <span className="">Time:</span>
                    </li>
                    <li>
                      <span className="">Suggested Players:</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col w-50 text-left my-4">
                  <ul>
                    <li> {event.description}</li>
                    <li> {event.location}</li>
                    <li> {event.time}</li>
                    <li> {event.numberOfPeople}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Map address={event.location} />
        </div>
        <div className="flex justify-around items-center mt-6 space-x-2 text-base">
          <div>
            <h4 className="font-semibold text-slate-900">Host</h4>
          </div>
          <div className="flex flex-row-reverse">
            <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
              {event.users.length}
            </span>
            <h4 className="font-semibold text-slate-900">Players</h4>
          </div>
        </div>
        <div className="flex justify-around">
          <div
            key={host.username}
            className=" group text-right sm:h-32 h-14 mt-10 group relative duration-300"
          >
            <Link to={`/users/${event.hostId}`}>
              <img
                className="object-center inline-block w-14 h-14 rounded-full ring-2 ring-white"
                src={host.photoUrl?host.photoUrl:'/pics/default-avatar.png'}
                alt={`${host.username}`}
              />
              <span className="absolute hidden group-hover:flex -right-1 -top-2 -translate-y-full  px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                {host.username}
              </span>
            </Link>
          </div>

          <div className="flex justify-between">
            <div className=" flex flex-row-reverse">
              {event.users.map((user) => {
                return (
                  <div
                    key={user.name}
                    className=" group text-right sm:h-32 h-14 mt-10 group relative duration-300"
                  >

                    <Link to={`/users/${user.userId}`}>
                      <img
                        className="object-center inline-block w-14 h-14 rounded-full ring-2 ring-slate-200"
                        src={user.photoUrl?user.photoUrl:'/pics/default-avatar.png'}
                        alt={`${user.name}`}
                      />
                      <span className="absolute hidden group-hover:flex -right-1 -top-2 -translate-y-full  px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                        {user.name}
                      </span>
                    </Link>

                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-around">
          <div className="flex float-left w-1/3 my-5 ">
            <Link
              className="w-2/5 py-4 text-center  bg-purple-300 drop-shadow-md  hover:drop-shadow-xl rounded-lg text-sm"
              to={'/events'}
            >
              Return to all events
            </Link>
          </div>
          <div className="flex float-right w-1/3 my-5 justify-between">
            {event.users.find((e) => e.userId === currentUser.id) ? (
              <button className="w-2/5 py-4 text-center  bg-purple-300 drop-shadow-md  hover:drop-shadow-xl rounded-lg text-sm">
                You are going
              </button>
            ) : (
              <button
                onClick={handleSumbit}
                className="w-2/5 py-4 text-center  bg-stone-300 drop-shadow-md hover:bg-stone-400 hover:drop-shadow-xl rounded-lg text-sm"
              >
                Join
              </button>
            )}

            <button className="w-2/5 py-4 text-center  bg-stone-300 drop-shadow-md hover:bg-stone-400 hover:drop-shadow-xl rounded-lg text-sm">
              Message
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default EventDetail
