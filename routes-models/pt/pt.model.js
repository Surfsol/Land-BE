const db = require("../../data/db-config")

module.exports = {
    add,
    findAll
}

function findAll(){
    return db('pt') 
}

function add(proj){
    return db('pt')
    .insert(proj)
    .then(ids => {
        const [id] = ids
        return db('pt')
        .where({id})
        .first()
    })
}