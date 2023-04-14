import moment from 'moment'



export function formatTime() {
  const today=moment()
  const formattedTime = today.format("ddd D MMM")
  const day=formattedTime.slice(7)
  return day
}