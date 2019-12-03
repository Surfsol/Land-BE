const db = require('../../data/db-config')

module.exports ={
    add,
    findAll,
    findBy,
    update
}

function add(tec){
    return db('tech')
    .insert(tec)
    //.returning('id') //returning used for postgres
    .then(ids => {
        const [id] = ids
        return db('tech')
        .where({id})
        .first()
    })
}

function findAll() {
    return db('tech')
    .select('id', 'tech')
}

function findBy(id){
    return db('tech')
    .where(id)
}

function update(changes, id){
    return db('tech')
    .update(changes)
    .where({id})
}

