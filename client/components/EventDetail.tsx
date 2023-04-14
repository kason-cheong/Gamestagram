import React from 'react'
import { Event } from '../../models/Event'
import { useEventsStore } from '../store/userEventsStore'
import { shallow } from 'zustand/shallow'
import { useEffect } from 'react'

function EventDetail(event: Event) {
  return (
    <>
      <div className="border-black">
        <img src={`${event.photoUrl}`} alt="" />
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
