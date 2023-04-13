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

export default router