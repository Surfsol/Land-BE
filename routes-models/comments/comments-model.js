const db = require('../../data/db-config')

module.exports = {
    add,
    findAll,
    findByProject
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

function findByProject(project_id){
    return db('comments')
    .where({project_id})
}

function findAll(){
    return db('comments as c')
    .join('project as p', 'c.project_id', 'p.id')
    .select('p.project', 'p.github', 'c.tech_one', 'c.tech_two', 'c.comment')

}
