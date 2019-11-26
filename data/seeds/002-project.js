
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {project:'Subreddit', date: "2019-11-20", description:'https://github.com/BuildWeek-PostHere-Subreddit'},
        {project:'Yelp', date: "2019-10-25", description:'https://github.com/BW-YELP-FEELERS'},
        {project:'VR-Funding',date: "2019-8-27", description:'https://github.com/Build-Week-VR-Funding-Platform'}
      ]);
    });
};
