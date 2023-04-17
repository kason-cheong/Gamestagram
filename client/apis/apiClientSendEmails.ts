import request from 'superagent'

const rootUrlEmail = '/api/v1/send'
export async function sendEmails(eventId: number) {
  return await request.post(`${rootUrlEmail}/${eventId}`)
}
