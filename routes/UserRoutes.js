module.exports = function(app) {
  var userDAO = require('../dao/UserDAO.js');

  app.get('/user/name/:name', userDAO.findByName);

};