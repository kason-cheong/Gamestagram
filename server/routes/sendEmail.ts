import express from 'express'

import * as db from '../db/sendEmail'
const router = express.Router()

router.post('/:id', (req, res) => {
  db.sendEmails(Number(req.params.id))
    .then((results) => {
      res.json(results)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})
export default router
