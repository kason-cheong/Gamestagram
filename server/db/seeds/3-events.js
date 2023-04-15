exports.seed = (knex) => {
  return knex('events').insert([
    {
      id: 1,
      host_id: 2,
      event_name: 'ke home party',
      description: 'lets have some fun',
      game_id: 2,
      location: '10 Morgan st, Auckland',
      time: '20-04-2023 21:00',
      number_ppl_playing: '2-4',
      created_at: new Date(1681450450040 / 1000),
    },
    {
      id: 2,
      host_id: 1,
      event_name: 'Borad game is the best',
      description: 'do you want to play?',
      game_id: 1,
      location: '8 Morgan st, Auckland',
      time: '21-07-2023 21:00',
      number_ppl_playing: '2-4',
      created_at: new Date(1681453450040 / 1000),
    },
  ])
}
