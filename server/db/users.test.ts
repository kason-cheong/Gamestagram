import knex from 'knex'

import config from './knexfile'
const testDb = knex(config.test)
import * as db from './users'
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
  const event = await db.getUsersById(1, testDb)
  expect(event.username).toMatch('Ke123')
  expect(event.email).toMatch('maxeipk@gmail.com')
})

test('returns he chosen user by au0id', async () => {
  const event = await db.getUsersByAuthId('12341d88', testDb)
  expect(event.username).toMatch('frank332')
  expect(event.id).toBe(2)
})
