var fs = require('fs');

/*
 * do not modify
 * use "object"Routes.js to add some routes
 * */

module.exports = function(app,passport,object) {
    var authController = require('../../controllers/AuthController')(passport);

    var path = "/"+object;
    var objectDAO = require('../../controllers/'+object+'Controller.js');

    app.get(path, objectDAO.findAll);
    app.get(path+'/:id', objectDAO.findById);
    app.post(path, objectDAO.add);
    app.put(path+'/:id', authController.isAuthenticated, objectDAO.update);
    app.delete(path+'/:id',  objectDAO.remove);

    console.log("API REST "+path+" : http://localhost:8085"+path );
};