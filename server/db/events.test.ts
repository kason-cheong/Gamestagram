import knex from 'knex'

import config from './knexfile'
const testDb = knex(config.test)
import * as db from './events'

jest.setTimeout(10000)

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getEventById', () => {
  it('returns he chosen Event', async () => {
    const event = await db.getEventsById(3, testDb)
    expect(event?.eventId).toBe(3)
    expect(event?.hostId).toBe(1)
    expect(event?.gameName).toMatch('Catan')
    expect(event?.eventName).toMatch('Settlers of Catan Day')
  })
})

describe('getEventByUser', () => {
  it('returns a arry', async () => {
    const event = await db.getEventsByUserId(1, testDb)
    expect(event).toHaveLength(3)
    expect(event[0].eventId).toBe(1)
    expect(event[1].userId).toBe(1)
    expect(event[2].eventName).toMatch('Settlers of Catan Day')
  })
})

describe('getEventsByHostId', () => {
  it('returns a arry', async () => {
    const event = await db.getEventsByUserId(1, testDb)
    expect(event).toHaveLength(3)
    expect(event[0].eventId).toBe(1)
    expect(event[1].userId).toBe(1)
    expect(event[2].eventName).toMatch('Settlers of Catan Day')
  })
})
// describe('addEvent', () => {
//   it('inserts event correctly', async () => {
//     const newEvent = {
//       host_id: 2,
//       game_id: 'OCv0s54FtD',
//       event_name: 'hi',
//       location: 'hi',
//       time: '2023-04-12',
//       game_name: 'The Game of Life',
//       description: 'hi',
//       status: 'open',
//       number_ppl_playing: '12',
//       created_at: 'asdasdas',
//       user_id: 2,
//       user_name: 'frank332',
//       photo_url: '123',
//       email: '123123',
//     }
//     const id = await db.addEvent(newEvent, testDb)
//     const event = await db.getEventsById(id[0], testDb)
//     expect(event?.eventName).toBe('Gardens of Testers')
//     expect(event?.hostId).toBe(2)
//   })
// })
