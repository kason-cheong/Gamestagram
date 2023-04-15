import type { FormattedEventWithUser } from '../../models/Event'
import { Link } from 'react-router-dom'
import { formatTime } from '../helper/helperFunction'

function EventCard({ event }: { event: FormattedEventWithUser }) {
  const date = event.time.slice(0, 10)
  const time = event.time.slice(10)

  const formattedTime=formatTime(date)

  return (
    <Link
      to={`/events/${event.eventId}`}
      className=" bg-slate-200 w-72 rounded-2xl shadow-2xl shadow-slate-400 ml-12"
    >
      <img src={`${event.gamePhoto}`} alt="" className="h-3/5 rounded-t-2xl w-full" />

      <div className="p-2 text-center h-2/5">
        <h4 className="text-orange-900 mb-2">{formattedTime}{time}</h4>
        <p className="font-semibold mb-1">{event.eventName}</p>
        <p className="italic mb-1">{event.gameName}</p>
        <p className="font-thin">{event.location}</p>
      </div>
    </Link>
  )
}

export default EventCard
