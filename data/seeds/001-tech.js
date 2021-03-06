
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tech').del()
    .then(function () {
      // Inserts seed entries
      return knex('tech').insert([
        {tech: 'React'},
        {tech: 'Redux'},
        {tech: 'Responsive'},
        {tech: 'Backend'},
        {tech: 'Database'},
        {tech: 'ReactHooks'},
        {tech: 'ReactClasses'},
        {tech: 'LoginSessions'},
        {tech: 'LoginCookies'},
        {tech: 'Register'},
        {tech: 'Forms'},
        {tech: 'Material UI'},
        {tech: 'ReactStrap'},
        {tech: 'Http-requests'},
        {tech: 'Bcryptjs'},
        {tech: 'jsonwebtoken'},
        {tech: 'Heroku'},
        {tech: 'Node.js'},
        {tech: 'Sprint'},
        {tech: 'PostgreSQL'},
        {tech: 'Sqlite3'},
        {tech: 'HTML'},
        {tech: 'SASS'},
        {tech: 'LESS'},
        {tech: 'Javascript'},
        {tech: 'Python'},
        {tech: 'Django'},
        {tech: 'Sql'},
        {tech: 'Testing'},
        {tech: 'AWS'},
        {tech: 'LocalStorage'}
      ]);
    });
};
