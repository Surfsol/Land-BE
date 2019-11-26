exports.up = function(knex) {
  return knex.schema.createTable("tech", tech => {
    tech.increments("id");

    tech
      .string("tech", 255)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("tech");
};
