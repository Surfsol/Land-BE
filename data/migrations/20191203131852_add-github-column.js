
exports.up = function(knex) {
  return knex.schema.table('project', tbl => {
      tbl.text('github')
  })
};

exports.down = function(knex) {
  return knex.schema.table('project', tbl => {
      tbl.dropColumn('github')
  })
};
