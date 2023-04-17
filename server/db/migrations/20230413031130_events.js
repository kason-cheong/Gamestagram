/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('events', (table) => {
    table.increments('id').primary()
    table.integer('host_id')
    table.string('event_name')
    table.integer('game_id')
    table.string('description')
    table.string('location')
    table.string('time')
    table.string('number_ppl_playing')
    table.date('created_at')
    table.string('status')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('events')
}
