
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('techsProject').del()
    .then(function () {
      // Inserts seed entries
      return knex('techsProject').insert([
        {project_id: 1, tech_name: "React"},
        {project_id: 2, tech_name: "React"},
        {project_id: 1, tech_name: "Redux"},
        {project_id: 2, tech_name: "Redux"}
      ]);
    });
};
