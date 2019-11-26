
exports.up = function(knex) {
    return knex.schema.createTable("techInProject", tip => {
        tip.increments()
        tip
            .integer('project_id')
            .unsigned() //integer must be positive, necessary in many dbs
            .notNullable()
            //referenced on users
            .references('id')
            .inTable('project')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tip
            .integer('tech_id')
            .unsigned() //integer must be positive, necessary in many dbs
            .notNullable()
            //referenced on users
            .references('id')
            .inTable('tech')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("techInProject")
};
