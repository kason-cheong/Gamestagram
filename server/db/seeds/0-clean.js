exports.seed = async (knex) => {
  await knex('users').del()
  await knex('games').del()
  await knex('events').del()
  await knex('user_event').del()
  // .then(empty('table_name'))
}
