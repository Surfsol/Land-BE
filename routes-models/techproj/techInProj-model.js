const db = require("../../data/db-config");

module.exports = {
  //add,
  find,
  findByTechId,
  findByTechName,
  findByProjectId,
  // findBy,
  // update,
  // remove
};

function find() {
  // first() returns the first entry in the db matching the query
  return db("techInProject as s")
    .join("tech as t", "s.tech_id", "t.id")
    .join("project as p", "s.project_id", "p.id")
    .select("p.id", "p.project", "p.description", "t.tech");
}

function findByTechId(id) {
  // first() returns the first entry in the db matching the query
  return db("techInProject as s")
    .join("tech as t", "s.tech_id", "t.id")
    .join("project as p", "s.project_id", "p.id")
    .where({ tech_id : id }) //tech_id from techInProject db
    .select("p.id", "p.project", "p.description", "t.tech", "t.id")
}

//tech_tech not in techInProject 
function findByTechName(name) {
  // first() returns the first entry in the db matching the query
  return db("techInProject as s")
    .join("tech as t", "s.tech_id", "t.id")
    .join("project as p", "s.project_id", "p.id")
    .where({ tech_id : name }) //tech_id from techInProject db
    .select("p.id", "p.project", "p.description", "t.tech", "t.id")
}

function findByProjectId(id) {
  // first() returns the first entry in the db matching the query
  return db("techInProject as s")
    .join("tech as t", "s.tech_id", "t.id")
    .join("project as p", "s.project_id", "p.id")
    .where({ project_id : id }) //tech_id from techInProject db
    .select("p.id", "p.project", "p.description", "t.tech", "t.id")
}

function addByTId(id) {
  return db("techInProject as s")
    .join("tech as t", "s.tech_id", "t.id")
    .join("project as p", "s.project_id", "p.id")
    .select("p.id", "p.project", "p.description", "t.tech", "t.id")
    .insert(id)
    .then(ids => {
      return findById(ids[0]);
    });
}

// function add(pro){
//     return db('project')
//     .insert(pro)
//     //.returning('id') //returning used for postgres
//     .then(ids => {
//         const [id] = ids
//         return db('project')
//         .where({id})
//         .first()
//     })
// }

// function findAll() {
//     return db('techProject')
//     .select('id', 'project', 'date', 'description')
// }

// function findById(id){
//     return db('techProject')
//     .where(id)
// }

// function update(changes, id){
//     return db('project')
//     .update(changes)
//     .where({id})
// }

// function remove(id){
//     return db('project')
//     .where({id})
//     .first()
//     .delete()
// }
