exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurant').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurant').insert([
        {id: 1, name: 'Pizza Hut', genre: 2, address: '1355 Santa Fe Dr, Denver, CO 80204', phoneNumber: '303-893-0055', www: 'https://www.pizzahut.com/'},
        {id: 2, name: 'McDonalds', genre: 1, address: '1350 W Colfax Ave, Denver, CO 80204', phoneNumber: '720-904-9550', www: 'https://www.mcdonalds.com/us/en-us.html'},
        {id: 3, name: 'Taco Bell', genre: 3, address: '634 16th St, Denver, CO 80202', phoneNumber: '303-893-2125', www: 'https://www.tacobell.com/'},
        {id: 4, name: 'Maggianos Little Italy', genre: 2, address: '500 16th St Suite 150, Denver, CO 80202', phoneNumber: '303-260-7707', www: 'https://www.maggianos.com/'},
        {id: 5, name: 'Anthonys Pizza & Pasta', genre: 2, address: '1780 16th St, Denver, CO 80202', phoneNumber: '303-623-0805', www: 'http://www.anthonyspizzaandpasta.com/home/'},
        {id: 6, name: 'Brider', genre: 1, address: '1644 Platte St, Denver, CO 80202', phoneNumber: '303-455-3084', www: 'http://www.denverbrider.com/'},
        {id: 7, name: 'Root Down', genre: 1, address: '1600 W 33rd Ave, Denver, CO 80211', phoneNumber: '303-993-4200', www: 'http://www.rootdowndenver.com/'},
        {id: 8, name: 'Bar Dough', genre: 2, address: '2227 W 32nd Ave, Denver, CO 80211', phoneNumber: '720-668-8506', www: 'http://www.bardoughdenver.com/'},
      ])
    })
    .then(function() {
      return knex.raw('ALTER SEQUENCE restaurant_id_seq RESTART WITH 9;')
    })
}