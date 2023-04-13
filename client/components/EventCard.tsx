import React from 'react'

function EventCard() {
  return (
    <section className=" bg-slate-200 w-1/5 rounded-2xl shadow-2xl shadow-slate-400 ml-12">
      <img src="/pics/game1.jpg" alt="" className="rounded-t-2xl" />

      <div className="p-2 text-center">
        <h4 className="text-orange-900 mb-2">Thur 20 APR 6:00 PM</h4>
        <p className="font-semibold mb-1">Ke`s party</p>
        <p className="italic mb-1">Monopoly</p>
        <p>Dev academy, New Market</p>
      </div>
    </section>
  )
}

export default EventCard