
exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurant', function(table) {
    table.increments()
    table.text('name')
    table.integer('genre')
    table.text('address')
    table.text('phoneNumber')
    table.decimal('latitude')
    table.decimal('longitude')

  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('restaurant')
}