import sgMail from '@sendgrid/mail'
import { getEventsById } from './events'

export async function sendEmails(eventId: number) {
  //  need to use event id to fetch the userId and get the email.

  sgMail.setApiKey(process.env.APIKEYSG as string)
  const data = await getEventsById(eventId)
  if (data) {
    const recipients = data.users.map((user) => user.email)

    const msg = {
      to: recipients,
      from: {
        name: 'Gamestagram',
        email: 'maxeipk@gmail.com',
      },
      subject: 'Message from Gamestagram',
      text: 'the event have attented has been canceled.',
      html: 'the event have attented has been canceled.',
    }

    sgMail.send(msg)
  } else {
    console.log('email not send')
  }
}
