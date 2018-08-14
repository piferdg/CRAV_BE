
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurant').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurant').insert([
        {id: 1, name: 'Pizza Hut', genre: 'Italian', address: 'addy1'},
        {id: 2, name: 'McDonalds', genre: 'American', address: 'addy2'},
        {id: 3, name: 'Taco Bell', genre: 'Mexican', address: 'addy3'},
        {id: 4, name: 'Fazolis', genre: 'Italian', address: 'addy4'},
        {id: 5, name: 'Piccolos', genre: 'Italian', 'Mexican', address: 'addy4'},
      ])
    })
}
