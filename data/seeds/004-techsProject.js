
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('techsProject').del()
    .then(function () {
      // Inserts seed entries
      return knex('techsProject').insert([
        {project_id: 6, tech_name: "React"},
        {project_id: 4, tech_name: "React"},
        {project_id: 2, tech_name: "React"},
        {project_id: 8, tech_name: "React"},
        {project_id: 2, tech_name: "Redux"},
        {project_id: 6, tech_name: "Redux"},
        {project_id: 2, tech_name: "Redux"},
        {project_id: 4, tech_name: "Redux"},
        {project_id: 13, tech_name: "HTML"},
        {project_id: 3, tech_name: "HTML"},
        {project_id: 4, tech_name: "SASS"},
        {project_id: 2, tech_name: "SASS"},
        {project_id: 3, tech_name: "LESS"},
        {project_id: 14, tech_name: "LESS"},
        {project_id: 1, tech_name: "Http-requests"},
        {project_id: 6, tech_name: "Http-requests"},
        {project_id: 1, tech_name: "Node.js"},
        {project_id: 5, tech_name: "Node.js"},
        {project_id: 7, tech_name: "Node.js"},
        {project_id: 12, tech_name: "Python"},
        {project_id: 11, tech_name: "Django"},
        {project_id: 5, tech_name: "Heroku"},
        {project_id: 1, tech_name: "Heroku"},
        {project_id: 7, tech_name: "Heroku"},
        {project_id: 5, tech_name: "PostgreSQL"},
        {project_id: 1, tech_name: "PostgreSQL"},
        {project_id: 7, tech_name: "PostgreSQL"},
        {project_id: 1, tech_name: "Sql"},
        {project_id: 15, tech_name: "Sql"},
        {project_id: 16, tech_name: "Testing"},
        {project_id: 17, tech_name: "Testing"},
        {project_id: 11, tech_name: "AWS"},
      ]);
    });
};
