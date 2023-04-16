
interface HostEvent{
  eventId:number
  hostId:number
  eventName:string
  time: string
  location:string
}


const MyEventCard = ({ event }: { event:HostEvent}) => {
  return (
    <div className="border p-2 w-1/3 mb-12">
      <h2 className="mb-4 font-bold text-lg">{event.eventName}</h2>
      <p>
        <b>Date:</b>{event.time}
      </p>
      <p>
        <b>Location:</b> {event.location}
      </p>
      <button className="px-4 py-2 bg-purple-200 rounded-2xl my-3">
        Edit Event
      </button>
      <button className="px-4 py-2 bg-purple-200 rounded-2xl my-3 mx-4">
        Cancel Event
      </button>
    </div>
  )
}

export default MyEventCard
