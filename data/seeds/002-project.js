
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([



        {project:'Subreddit', date: "2019-11-20", description: 'Team project including Frontend React, Backend Node.js and Data Science developers.  I worked with one other teammate to develop the backend.  Used nodejs, knex, express, Sqlite and PostgreSQL databases. Included testing. I also helped Frontend developers set up the Redux environment.', github:'https://github.com/BuildWeek-PostHere-Subreddit'},
        {project:'Yelp', date: "2019-10-25", description: 'Team project including Marketing, Frontend, Backend and Data Science.  I was lead Frontend React developer.  Implemented a React / Redux architecture. Http methods include .get, .post, and .delete.  This site gave modified ratings of customer evaluations that were posted on Yelp.  The modified ratings were based off words and stars given in the review.  Users can search reviews, save, delete ', github:'https://github.com/BW-YELP-FEELERS'},
        {project:'VR-Funding',date: "2019-8-27", description: 'Team project, I created a fully responsive landing page. Main technologies include HTML and LESS for Css.', github:'https://github.com/Build-Week-VR-Funding-Platform'},
        {project:'Resume Landing',date: "2019-12-27", description: 'This project is the frontend portion of my website resume.  Its a fully responsive site, using React, Redux, Sass, Material-UI and currently hosted on Zeit', github:'https://github.com/Surfsol/Landing'},
        {project:'Resume Landing Backend',date: "2019-12-27", description: 'The backend portion of my website resume.  Using Node.js, Express, Knex and currently hosted on Heroku', github:'https://github.com/Surfsol/Land-BE'},
        {project:'Well Done Frontend',date: "2019-12-27", description: 'In this team project.  We make additions to a site that is not yet being used in production.  The Stakeholder is a non-profit organization that develops remote sensors for well pumps.  This site will help them and their clients manage and track historical data provided from their sensors.  Main technologies used include: React, React-map-gl, Redux, Redux-Thunk, Sass and Material-UI', github:'https://github.com/Lambda-School-Labs/well-done-fe'},
        {project:'Well Done Backend',date: "2019-12-27", description: 'In this team project.  We make additions to a site that is not yet being used in production.  The Stakeholder is a non-profit organization that develops remote sensors for well pumps.  This site will help them and their clients manage and track historical data provided from their sensors.  Main technologies used include: Node.js, PostgreSQL and Heroku', github:'https://github.com/Lambda-School-Labs/well-done-be'},
        {project:'Air Bnb Price Optimizer',date: "2019-12-27", description: 'Team project which included Frontend, Backend and Data Science.  This site utilizes data modeling to provide optimal pricing for property owners to maximize their income on Air Bnb.  I was part of the Frontend team, technologies used: React, React Context API, Formik, Reactstrap ', github:'https://github.com/AirBNBOptimalPrice'},
        {project:'Login Auth Session Cookies',date: "2019-11-11", description: 'Authentication, Express Middleware,Password Hashing,Sessions,Cookies', github:'https://github.com/Surfsol/webauth-i-challenge/tree/russell-terry'},
        {project:'Login Auth JWT',date: "2019-11-12", description: 'Authentication, Express Middleware,Json web tokens and hashing', github:'https://github.com/Surfsol/webauth-iii-challenge/tree/russell-terry'},
        {project:'Django Web Crawler',date: "2019-4-3", description:'Web crawler, using Django' , github:'https://github.com/baidai/Django-Rest-Frame-Work-Web-Crawler'},
        {project:'Titanic modeling with Python',date: "2018-11-3", description:'Random Forrest, Logistical Regression, ROC Curve' , github:'https://github.com/baidai/Titanic-'},
        {project:'Great Ideas',date: "2019-8-13", description:'Designed a fully responsive site with HTML and CSS' , github:'https://github.com/Surfsol/responsive-web-design-I/tree/russell-terry'},
        {project:'Space Walkers',date: "2019-8-18", description:'Designed a fully responsive site with HTML, LESS preprocessing for CSS' , github:'https://github.com/Surfsol/Sprint-Challenge--Advanced-CSS/tree/russell-terry'},
        {project:'node-db4-challenge',date: "2019-11-7", description:'Design the data model for a recipe book application, then use Knex migrations and seeding functionality to build a SQLite3 database based on the model and seed it with test data.' , github:'https://github.com/Surfsol/node-db4-challenge/tree/russell-terry'},
        {project:'node-server-testing-challenge',date: "2019-11-15", description:'Test Driven Development to create a RESTful API using Node.js and Express that publishes a set of endpoints to manage a resource of your choosing.' , github:'https://github.com/Surfsol/node-server-testing-challenge/tree/russell-terry'},
        {project:'Web-Application-Testing',date: "2019-10-3", description:'Test React application, using the react-testing-library testing framework, write unit tests for React components.' , github:'https://github.com/Surfsol/Web-Application-Testing/tree/russell-terry'}
      ]);
    });
};
