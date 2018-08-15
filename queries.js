const database = require('./database-connection')

module.exports = {
  list(){
    return database('restaurant')
  },

  read(id){
    return database('restaurant')
      .select().where('id', id)
  },
  
  genreList(){
    return database('genre')
  },

  getGenre(genre){
    return database('restaurant')
    .join('genre', 'restaurant.genre', '=', 'genre.id')
    .select().where('genre.id', genre)
  },
}
