/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('games', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('description')
    table.string('number_player')
    table.string('play_time')
    table.string('photo_url')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('games')
}
