import express from 'express'

import * as db from '../db/games'

const router = express.Router()

router.get('/', (req, res) => {
  db.getGames()
    .then((results) => {
      res.json(results)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.get('/:id', (req, res) => {
  db.getGamesByApiId(req.params.id)
    .then((results) => {
      res.json(results)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})


router.post('/add', async (req, res) => {
  try {
    await db.addGame(req.body)
    res.status(201).json({message:"a new game has been added"})
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
  
})

export default router
