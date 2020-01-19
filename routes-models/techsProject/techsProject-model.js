const db = require("../../data/db-config");

module.exports = {
  findByTech,
  add,
  findAll
};

function findByTech(tech) {
  return db("techsProject as s")
    .join("tech as t", "s.tech_name", "t.tech")
    .join("project as p", "s.project_id", "p.id")
    .where({ tech_name: tech })
    .select("t.tech", "p.id", "p.project", "p.description", "p.github");
}

function findAll() {
  return db("techsProject as s")
    .join("tech as t", "s.tech_name", "t.tech")
    .join("project as p", "s.project_id", "p.id")
    .select("t.tech", 'p.id', "p.project", "p.description", "p.github");
}

function add(newAdd) {
  return db("techsProject")
    .insert(newAdd, "id")
    .then(ids => {
      const [id] = ids.where({ id }).first();
    });
}
