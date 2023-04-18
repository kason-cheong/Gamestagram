import moment from 'moment'

export function formatTime(time: string) {
  const unFormattedTime = moment(time, 'DD-MM-YYYY').format('ddd DD MMM')
  const day = unFormattedTime.slice(7).toUpperCase()
  const date = unFormattedTime.slice(0, 6)
  const FormattedDate = date + ' ' + day
  return FormattedDate
}

export function limitLocationLength(locationName: string): string {
  return locationName.slice(0, 23)
}
