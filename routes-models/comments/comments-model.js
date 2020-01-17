const db = require('../../data/db-config')

module.exports = {
    add,
    findAll
}


function add(comment){
    return db('comments')
    .insert(comment, 'id')
    .then(ids => {
        const [id] = ids
        return db('comments')
        .where({id})
        .first()
    })
}

function findAll(){
    return db('comments as c')
    .join('project as p', 'c.project_id', 'p.id')
    .select('p.project', 'p.github', 'c.tech_one', 'c.tech_two', 'c.comment')

}
