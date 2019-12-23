
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {project:'Subreddit', date: "2019-11-20", description: 'Cross platform team including Frontend, Backend and Data Science.  I was on Backend team.  Used nodejs, knex, express and Postgres database. Included testing. I also helped Frontend set up Redux environment.', github:'https://github.com/BuildWeek-PostHere-Subreddit'},
        {project:'Yelp', date: "2019-10-25", description: 'Cross platform team including Marketing, Frontend, Backend and Data Science.  I was lead Frontend developer.  Implemented a React / Redux structure. Http methods .get, .post, .delete.  Users can get real time ratings from data science team. Search reviews, save, delete ', github:'https://github.com/BW-YELP-FEELERS'},
        {project:'VR-Funding',date: "2019-8-27", description: 'I created the landing page. Using preprocessing Less, fully responsive design.', github:'https://github.com/Build-Week-VR-Funding-Platform'}
      ]);
    });
};
