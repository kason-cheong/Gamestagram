import { cancelEvent } from '../apis/apiClientEvents'
import { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

interface MyEvent {
  eventId: number
  userId: number
  hostId:number
  userEventId: number
  eventName: string
  time: string
  location: string
}





const MyEventCard = ({ event,fetchMyEvents }: { event: MyEvent,fetchMyEvents:(id:number)=>Promise<void> }) => {
  

  

  async function handleOpen() {
    setOpen(true)
  }

  const [open, setOpen] = useState(false)
  const [showCard, setShowCard] = useState(true)

  const handleCancel = async (userEventId: number) => {
    await cancelEvent(userEventId)
    fetchMyEvents(event.userId)
    setOpen(false)
    setShowCard(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
   
        
          <div className="border p-2 w-1/3 mb-12">
        <h2 className="mb-4 font-bold text-lg">{event.eventName}</h2>
        <p className="text-purple-500"><b className="text-black">Role:</b> player</p>
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
  )
}

export default MyEventCard
