import type { FormattedEventWithUser } from '../../models/Event'
import { Link } from 'react-router-dom'
import { formatTime } from '../helper/helperFunction'

function EventCard({ event }: { event: FormattedEventWithUser }) {
  const date = event.time.slice(0, 10)
  const time = event.time.slice(10)

  const formattedTime=formatTime(date)

  return (
    <Link to={`/events/${event.eventId}`}>
      <section className=" bg-slate-200 w-1/5 rounded-2xl shadow-2xl shadow-slate-400 ml-12">
        <img src="/pics/game1.jpg" alt="" className="rounded-t-2xl" />

        <div className="p-2 text-center">
          <h4 className="text-orange-900 mb-2">{formattedTime} {time}</h4>
          <p className="font-semibold mb-1">{event.eventName}</p>
          <p className="italic mb-1">{event.gameName}</p>
          <p>{event.location}</p>
        </div>
      </section>
    </Link>
  )
}

export default EventCard
