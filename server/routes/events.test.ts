import request from 'supertest'

import server from '../server'
import * as db from '../db/events'

jest.mock('../db/events')

test('GET /events should return an array of events', async () => {
  // here we should mock our db functions
  const mockGetEvents = jest.mocked(db.getEvents)
  mockGetEvents.mockResolvedValue([
    {
      eventId: 2,
      time: "21-07-2023 21:00",
      gameId: "yqR4PtpO8X",
      hostId: 1,
      location: "8 Morgan st, Auckland",
      eventName: "Borad game is the best",
      status: "open",
      numberOfPeople: "2-4",
      createdAt: "1681453450",
      description: "do you want to play?",
      gameName: "Scythe",
      gamePhoto: "https://cdn.shopify.com/s/files/1/0513/4077/1515/products/scythe-board-game.jpg?v=1611090922",
      users: [
          {
              userId: 2,
              name: "frank332",
              photoUrl: "https://st2.depositphotos.com/1071909/6630/i/450/depositphotos_66306151-stock-photo-programmer-click-on-keypad-api.jpg",
              email: "fank_hall@gmail.com"
          },
          {
              userId: 1,
              name: "Ke123",
              photoUrl: "https://st2.depositphotos.com/1071909/6630/i/450/depositphotos_66306151-stock-photo-programmer-click-on-keypad-api.jpg",
              email: "maxeipk@gmail.com"
          },
      ]
  }
  ] )

  const response = await request(server).get('/api/v1/events')

  expect(response.status).toBe(200)

  expect(response.text.includes("yqR4PtpO8X")).toBeTruthy
})