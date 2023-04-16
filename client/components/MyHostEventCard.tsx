import { Link } from "react-router-dom"


interface HostEvent{
  eventId:number
  hostId:number
  userId:number
  eventName:string
  time: string
  location:string
}


const MyEventCard = ({ event }: { event:HostEvent}) => {
  return (
    <div className="border p-2 w-1/3 mb-12">
      <h2 className="mb-4 font-bold text-lg">{event.eventName}</h2>
      <p className="text-blue-500"><b className="text-black">Role:</b> host</p>
      <p>
        <b>Date:</b>{event.time}
      </p>
      <p>
        <b>Location:</b> {event.location}
      </p>
      <Link to={`/events/${event.eventId}/edit`}>
      <button className="px-4 py-2 bg-purple-200 rounded-2xl my-3">
        Edit Event
        </button>
        </Link>
      <button className="px-4 py-2 bg-purple-200 rounded-2xl my-3 mx-4">
        Cancel Event
      </button>
    </div>
  )
}

export default MyEventCard
