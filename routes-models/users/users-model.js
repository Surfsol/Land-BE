const db = require('../../data/db-config')

module.exports = {
    add,
    findById
}


function findById(id){
    return db('users')
    .select('id', 'username')
    .where({id})
    .first();//an array will be returned, need to select first item
}

function add(creds){
    return db('users')
    .insert(creds, 'id') //'id' must use for heroku
    .then(ids => {
        const[id]= ids;
        return findById(id)
    })
}
