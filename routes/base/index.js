/**
 * Author : Edouard Germain
 *
 * do not modify to add specific routes
 * use the ' objet ' routes.js
 *
 * API routes ( GET , GET ALL, UPDATE, POST, DELETE)
 */


module.exports = function(app,passport,object) {
    var authController = require('../../controllers/AuthController')(passport);

    var path = "/"+object;
    var objectDAO = require('../../controllers/'+object+'Controller.js');

    app.get(path, objectDAO.findAll);
    app.get(path+'/:id', objectDAO.findById);
    app.post(path, authController.isAuthenticated,objectDAO.add);
    app.put(path+'/:id', authController.isAuthenticated, objectDAO.update);
    app.delete(path+'/:id', authController.isAuthenticated, objectDAO.remove);

    console.log("API REST "+path+" : http://localhost:8085"+path );
};