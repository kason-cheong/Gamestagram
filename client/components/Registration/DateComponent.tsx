import React from 'react'
interface Prop {
  date: Date
}

function DateComponent(props: Prop) {
  const formattedDate = props.date.toLocaleTimeString()
  return (
    <div>
      <p>The date is:</p>
      <p>{formattedDate}</p>
    </div>
  )
}

export default DateComponent
