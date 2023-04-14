import React from 'react'
import type { Event, FormattedEventWithUser } from '../../models/Event'
import { Link } from 'react-router-dom'
import { formatTime } from '../helper/helperFunction'

function EventCard({ event }: { event: FormattedEventWithUser }) {
  const date = formatTime()

  return (
    <Link
      to={`/events/${event.eventId}`}
      className="scroll-smooth snap-x bg-slate-200 w-1/5 rounded-2xl shadow-2xl shadow-slate-400 ml-12"
    >
      <img src={`${event.gamePhoto}`} alt="" className="h-1/2 rounded-t-2xl" />

      <div className="p-2 text-center">
        <h4 className="text-orange-900 mb-2">{event.time}</h4>
        <p className="font-semibold mb-1">{event.eventName}</p>
        <p className="italic mb-1">{event.gameName}</p>
        <p className="font-thin">{event.location}</p>
      </div>
    </Link>
  )
}

export default EventCard
