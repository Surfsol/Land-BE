const db = require('../../data/db-config')

module.exports ={
    add,
    findAll,
    findBy,
    update,
    remove
}

function add(pro){
    return db('project')
    .insert(pro)
    //.returning('id') //returning used for postgres
    .then(ids => {
        const [id] = ids
        return db('project')
        .where({id})
        .first()
    })
}

function findAll() {
    return db('project')
    .select('id', 'project', 'date', 'description')
}

function findBy(pro){
    return db('project')
    .where(pro)
}

function update(changes, id){
    return db('project')
    .update(changes)
    .where({id})
}

function remove(id){
    return db('project')
    .where({id})
    .first()
    .delete()
}