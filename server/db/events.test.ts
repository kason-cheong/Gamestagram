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

