
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('genre').del()
    .then(function () {
      // Inserts seed entries
      return knex('genre').insert([
        {id: 1, genre: 'American'},
        {id: 2, genre: 'Italian'},
        {id: 3, genre: 'Mexican'},
      ])
    })
}
