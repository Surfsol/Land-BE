
exports.up = function(knex) {
    return knex.schema.createTable("project", project => {
        project.increments("id");
    
        project
          .string("project", 255)
          .notNullable()
          .unique();

        project
          .timestamp("date")
          .notNullable()
          .defaultTo(knex.fn.now());

        project.text("description");
    
        project.text("github");
    
        
      });

    return knex.schema.createTable("tech", tech => {
        tech.increments("id");
    
        tech
          .string("tech", 255)
          .notNullable()
          .unique();
      });

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
    return knex.schema.dropTableIfExists("project");
    return knex.schema.dropTableIfExists("tech");
    return knex.schema.dropTableIfExists("techsProject")
    
};
