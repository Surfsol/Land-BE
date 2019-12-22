

exports.up = function(knex) {
    return knex.schema.createTable("techsProject", tip => {
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
            .string('tech_name')
            .notNullable()
            //referenced on users
            .references('tech')
            .inTable('tech')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("techsProject")
};
