var fs = require('fs');

/*
* do not modify
* use "object"Routes.js to add some routes
* */

module.exports = function(app,passport) {
    fs.readdirSync(__dirname+'/../../models').forEach(function(fileName)
        {
            if(fileName.indexOf('.js'))
                {
                    var object = fileName.split(".")[0];
                    var path = "/"+object;
                    var objectDAO = require('../../controllers/'+object+'Controller.js');

                    console.log("API REST "+path+" : http://localhost:8085"+path );

                    app.get(path, objectDAO.findAll);
                    app.get(path+'/:id', objectDAO.findById);
                    app.post(path, objectDAO.add);
                    app.put(path+'/:id', objectDAO.update);
                    app.delete(path+'/:id', objectDAO.remove);
                }
        });


};