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

// router.post('/add/user_event', async (req, res) => {
//   try {

//      const timestamp=new Date(Date.now())
//      const newData = { user_id:2,event_id:3,created_at: timestamp }
//      console.log(newData);

//      await db.addUserEvent(newData)
//      res.status(201).json({message:"created event and user_event"})
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong' })
//   }
//     })

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

// router.get('/:id', (req, res) => {
//   db.findEventById(req.params.id)
//     .then((results) => {
//       res.json(results)
//     })
//     .catch((err) => {
//       console.log(err)
//       res.status(500).json({ message: 'Something went wrong' })
//     })
// })

export default router
