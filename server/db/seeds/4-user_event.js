exports.seed = (knex) => {
  return knex('user_event').insert([
    {
      id: 1,
      user_id: 2,
      event_id: 2,
      created_at: '11-04-2023',
    },
    {
      id: 2,
      user_id: 1,
      event_id: 1,
      created_at: '11-04-2023',
    },
    { id: 3, user_id: 1, event_id: 2, created_at: '11-04-2023' },
    { id: 4, user_id: 2, event_id: 1, created_at: '11-04-2023' },
  ])
}
