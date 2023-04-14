import moment from 'moment'

export function formatTime(time:string) {
  const unFormattedTime = moment(time,'DD-MM-YYYY').format("ddd D MMM")
  const day = unFormattedTime.slice(7).toUpperCase()
  const date=unFormattedTime.slice(0,6)
  const FormattedDate=date+" "+day
  return FormattedDate
}