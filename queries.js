const database = require('./database-connection')

module.exports = {
  list(){
    return database('restaurant')
  },

  read(id){
    return database('restaurant')
      .select().where('id', id)
  },/*
  create(game){
    return database('restaurant')
      .insert(game)
      .then(record => record[0])
  },
  update(id, game){
    return database('restaurant')
      .update(game)
      .where('id', id)
      .returning('*')
      .then(record => record[0])
  },
  delete(id){
    return database('restaurant')
      .where('id', id)
      .del()
  },*/
}
