exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurant').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurant').insert([
        {id: 1, name: 'Pizza Hut', genre: 'Italian', address: '1355 Santa Fe Dr, Denver, CO 80204', phoneNumber: '303-893-0055', latitude: '1.1', longitude: '1.0'},
        {id: 2, name: 'McDonalds', genre: 'American', address: '1350 W Colfax Ave, Denver, CO 80204', phoneNumber: '720-904-9550', latitude: '2.1', longitude: '2.0'},
        {id: 3, name: 'Taco Bell', genre: 'Mexican', address: '634 16th St, Denver, CO 80202', phoneNumber: '303-893-2125', latitude: '3.1', longitude: '3.0'},
        {id: 4, name: 'Maggianos Little Italy', genre: 'Italian', address: '500 16th St Suite 150, Denver, CO 80202', phoneNumber: '303-260-7707', latitude: '4.1', longitude: '4.0'},
        {id: 5, name: 'Anthonys Pizza & Pasta', genre: 'Italian', address: '1780 16th St, Denver, CO 80202', phoneNumber: '303-623-0805', latitude:'5.1', longitude:'5.0'},
      ])
    })
    .then(function() {
      return knex.raw('ALTER SEQUENCE restaurant_id_seq RESTART WITH 6;')
    })
}