const database = require("./database-connection");
const knex = require('knex')

module.exports = {
    list(){
        return database('restaurant')
    },
    getMexican(){
        return database('restaurant')
        .select().where('genre', 'Mexican')
    },
    getItalian(){
        return database('restaurant')
        .select().where('genre', 'Italian')
    },
    getAmerican(){
        return database('restaurant')
        .select().where('genre', 'American')
    },
    read(id){
        return database('restaurant')
        .select().where('id', id)
    },
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
    }
};
