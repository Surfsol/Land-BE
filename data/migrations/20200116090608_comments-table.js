exports.up = function(knex) {
  return knex.schema.createTable("comments", tbl => {
    tbl.increments();

    tbl.text("comment").notNullable();

    tbl
      .integer("project_id")
      .unsigned() //integer must be positive, necessary in many dbs
      .notNullable()
      .references("id")
      .inTable("project")

    tbl
      .string("tech_one")
      .references("tech")
      .inTable("tech");

    tbl
      .string("tech_two")
      .references("tech")
      .inTable("tech");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("comments");
};
