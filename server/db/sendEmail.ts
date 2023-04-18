import sgMail from '@sendgrid/mail'
import { getEventsById } from './events'

export async function sendEmails(eventId: number) {
  //  need to use event id to fetch the userId and get the email.

  sgMail.setApiKey(process.env.APIKEYSG as string)
  const data = await getEventsById(eventId)
  function sendEmail(userEmail: string, userName: string) {
    const msg = {
      to: userEmail,
      from: {
        name: 'Gamestagram',
        email: 'maxeipk@gmail.com',
      },
      subject: 'Message from Gamestagram',
      text: `dear ${userName}, we are sorry to inform you that the event<${data?.eventName}> held on ${data?.time} has been canceled, welcome to join another event.`,
      html: `dear ${userName}, we are sorry to inform you that the event<${data?.eventName}> held on ${data?.time} has been canceled, welcome to join another event.`,
    }
    sgMail.send(msg)
  }
  if (data) {
    data.users.map((user) => sendEmail(user.email, user.name))
  } else {
    console.log('email not send')
  }
}
