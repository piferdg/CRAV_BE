
exports.up = function(knex, Promise) {
    return knex.schema.createTable('restaurant_genre', (table) => {
        table.increments()
        table.text('restaurant_genre')
    } 
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('restaurant_genre')
}
