
exports.up = function(knex, Promise) {
    return knex.schema.createTable('restaurant', function(table) {
        table.increments()
        table.text('name')
        table.text('genre')
        table.text('address')
        table.decimal('latitude')
        table.decimal('longitude')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('restaurant')
};
