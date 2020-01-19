
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {comment: 'SensorModal.js - Javascript - for loop, create arrays and find unique values', project_id: 6, tech_one: 'Javascript'},
        {comment: 'signin-action.js - save details to local storage, localStorage.setItem(token, res.data.token).  SensorModal.js Get items from local storage const userRole = localStorage.getItem(role)', project_id: 6, tech_one: 'LocalStorage'},
        {comment: 'accounts.model  find by org_id  .where({ org_id }), will find by org_id in column org_id', project_id: 7, tech_one: 'PostgreSQL'},
        {comment: 'sensorsActions, sensors-model backend .post array to update two tables', project_id: 7, tech_one: 'PostgreSQL', tech_two: 'Http-requests'},
        {comment: 'sensorsModal, modalDisplay(), display modal based upon user_type in local storage', project_id: 6, tech_one: 'Javascript'}
      ]);
    });
};
