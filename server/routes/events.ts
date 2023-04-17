import express from 'express'
import { FormattedEventWithUser } from '../../models/Event'

import * as db from '../db/events'

const router = express.Router()

router.get('/', (req, res) => {
  db.getEvents()
    .then((results) => {
      res.json(results)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.get('/:id', (req, res) => {
  db.getEventsById(Number(req.params.id))
    .then((results) => {
      res.json(results)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.get('/my-events/user/:userId', (req, res) => {
  db.getEventsByUserId(Number(req.params.userId))
  .then((results) => {
    res.json(results)
  })
  .catch((err) => {
    console.log(err)
    res.status(500).json({ message: 'Something went wrong' })
  })
})

// router.get('/my-events/host/:hostId', (req, res) => {
//   db.getEventsByHostId(Number(req.params.hostId))
//   .then((results) => {
//     res.json(results)
//   })
//   .catch((err) => {
//     console.log(err)
//     res.status(500).json({ message: 'Something went wrong' })
//   })
// })



router.post('/add/user-event', async (req, res) => {
  try {
    const {userId,eventId} = req.body

    const timestamp = new Date(Date.now())
    const newData = {
      user_id: Number(userId),
      event_id: Number(eventId),
      created_at: timestamp,
    }
    await db.addUserEvent(newData)
    res.status(201).json({ message: 'created event and user_event' })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})



router.post('/add', async (req, res) => {
  try {
    const id = await db.addEvent(req.body)
    console.log(req.body.host_id);

    const timestamp = new Date(Date.now())
    const newData = {
      user_id: req.body.host_id as number,
      event_id: id[0],
      created_at: timestamp,
    }
    await db.addUserEvent(newData)
    res.status(201).json({ message: 'created event and user_event' })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})


router.patch('/:id/edit', (req, res) => {
  db.editEvent(Number(req.params.id), req.body)
    .then((results) => {
      res.json(results)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})





router.delete('/my-events/:userEventId', (req,res)=> {
  db.cancelUserEvent(Number(req.params.userEventId))
  .then(() => {
    res.status(200).json({ message: 'user_event has been deleted' })
  })
  .catch((err) => {
    console.log(err)
    res.status(500).json({ message: 'Something went wrong' })
  })
})

export default router
