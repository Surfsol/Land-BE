
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('techInProject').del()
    .then(function () {
      // Inserts seed entries
      return knex('techInProject').insert([
        {project_id: 1, tech_id: 1},
        {project_id: 2, tech_id: 2},
        {project_id: 3, tech_id: 3}
      ]);
    });
};
