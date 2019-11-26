exports.up = function(knex) {
    return knex.schema.createTable('project', project => {
      project.increments('id');
  
      project
        .string('project', 255)
        .notNullable()
        .unique();
    project
        .timestamp('date')
        .notNullable()
        .defaultTo(knex.fn.now())

      project.text('description')
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('project');
  };
