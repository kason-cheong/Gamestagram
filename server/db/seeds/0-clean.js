exports.seed = async (knex) => {
  await knex('users').del()
  await knex('games').del()
  await knex('events').del()
  // .then(empty('table_name'))
}
