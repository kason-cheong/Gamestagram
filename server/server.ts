import express from 'express'
import path from 'path'
import { join } from 'node:path'

import events from './routes/events'
import games from './routes/games'
import users from './routes/users'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/events', events)
server.use('/api/v1/games', games)
server.use('/api/v1/users', users)

server.get('*', (req, res) => {
  const appPath = path.join(__dirname, 'public', 'index.html')
  res.sendFile(appPath)
})

export default server
