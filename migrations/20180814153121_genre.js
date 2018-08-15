
exports.up = function(knex, Promise) {
  return knex.schema.createTable('genre', (table) => {
    table.increments()
    table.text('genre')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('genre')
}
