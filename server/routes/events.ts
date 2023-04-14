import express from 'express'

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

router.post('/add', (req, res) => {
  db.addEvent(req.body)
    .then((results) => {
      res.json(results)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
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
