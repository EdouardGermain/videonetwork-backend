var Object = require('../models/User.js');

module.exports = require('./base/index.js')(Object);


/* add specific data access here */

module.exports.findByName = function(req,res)
    {
        Object.Model.findOne({username:req.param('name')}, function (err, user) {
            if (err) {
                res.send(400, { message: err });
            }else if (!user){
                res.send(404,{ message: "User not found" });
            }
            else{
                res.json(user);
            }
        });
    };