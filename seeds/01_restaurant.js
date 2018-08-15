exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurant').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurant').insert([
        {id: 1, name: 'Pizza Hut', genre: 'Italian', address: 'addy1', latitude: '1.1', longitude: '1.0'},
        {id: 2, name: 'McDonalds', genre: 'American', address: 'addy2', latitude: '2.1', longitude: '2.0'},
        {id: 3, name: 'Taco Bell', genre: 'Mexican', address: 'addy3', latitude: '3.1', longitude: '3.0'},
        {id: 4, name: 'Fazolis', genre: 'Italian', address: 'addy4', latitude: '4.1', longitude: '4.0'},
        {id: 5, name: 'Piccolos', genre: 'Italian', address: 'addy4', latitude:'5.1', longitude:'5.0'},
      ])
    })
    .then(function() {
      return knex.raw('ALTER SEQUENCE restaurant_id_seq RESTART WITH 6;')
    })
 }