const db = require("../../data/db-config");

module.exports ={
    findByTech
}

function findByTech(){
    return db("techsProject as s")
        .join("tech as t", "s.tech_name", "t.tech")
        .join("project as p", "s.project_id", "p.id")
        .select("t.tech","p.project", "p.description", "p.github")
}