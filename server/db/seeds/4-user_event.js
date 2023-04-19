exports.seed = (knex) => {
  return knex('user_event').insert([
    {
      id: 1,
      user_id: 2,
      event_id: 2,
      created_at: '19-02-2023',
    },
    {
      id: 2,
      user_id: 1,
      event_id: 1,
      created_at: '27-04-2023',
    },
    {
      id: 3,
      user_id: 1,
      event_id: 2,
      created_at: '11-02-2023',
    },
    {
      id: 4,
      user_id: 2,
      event_id: 1,
      created_at: '28-04-2023',
    },
    {
      id: 5,
      user_id: 1,
      event_id: 3,
      created_at: '25-02-2023',
    },
    {
      id: 6,
      user_id: 2,
      event_id: 4,

      created_at: '21-03-2023',
    },
  ])
}
