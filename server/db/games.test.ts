import knex from 'knex'

import config from './knexfile'
const testDb = knex(config.test)
import * as db from './games'
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

test('returns he chosen user', async () => {
  const event = await db.getGamesByApiId('TAAifFP590', testDb)
  expect(event.name).toMatch('Root')
  expect(event.id).toBe(1)
})
