
exports.up = function(knex) {
  return knex.schema.createTable('pt', tbl => {
      tbl.increments()

      tbl
        .string('project', 50)
        .notNullable()
        .unique()

      tbl   
        .string('github', 255)
        .unique()
    
    tbl
        .timestamp('date')
        .notNullable()
        .defaultTo(knex.fn.now())

    tbl
        .text('description')

    tbl.string('tech1')
    tbl.string('tech2')
    tbl.string('tech3')
    tbl.string('tech4')
    tbl.string('tech5')
    tbl.string('tech6')
    tbl.string('tech7')
    tbl.string('tech8')
    tbl.string('tech9')
    tbl.string('tech10')
    tbl.string('tech11')
    tbl.string('tech12')
    tbl.string('tech13')
    tbl.string('tech14')
    tbl.string('tech15')
    tbl.string('tech16')
    tbl.string('tech17')
    tbl.string('tech18')
    tbl.string('tech19')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pt')
  
};
