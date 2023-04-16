import { cancelEvent } from '../apis/apiClientEvents'
import { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

interface HostEvent {
  eventId: number
  userId: number
  userEventId: number
  eventName: string
  time: string
  location: string
}

const MyEventCard = ({ event }: { event: HostEvent }) => {
  async function handleOpen() {
    setOpen(true)
  }

  const [open, setOpen] = useState(false)
  const [showCard, setShowCard] = useState(true)

  const handleCancel = async (userEventId: number) => {
    await cancelEvent(userEventId)
    setOpen(false)
    setShowCard(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      {showCard ? (
        <>
          <h2 className="text-xl font-semibold mb-2 text-blue-400">
            attending Events
          </h2>
          <div className="border p-2 w-1/3 mb-12">
            <h2 className="mb-4 font-bold text-lg">{event.eventName}</h2>
            <p>
              <b>Date:</b> {event.time}
            </p>
            <p>
              <b>Location:</b> {event.location}
            </p>
            <button
              onClick={handleOpen}
              className="px-4 py-2 bg-purple-200 rounded-2xl my-3"
            >
              I am not going
            </button>
          </div>
          <div>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {'Are you sure you are not going to this event?'}
              </DialogTitle>
              <DialogActions>
                <Button onClick={handleClose}>No</Button>
                <Button
                  onClick={() => handleCancel(event.userEventId)}
                  autoFocus
                >
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </>
      ) : (
        <p>No attending events</p>
      )}
    </>
  )
}

export default MyEventCard
