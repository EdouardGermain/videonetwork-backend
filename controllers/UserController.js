var Object = require('../models/User.js');

module.exports = require('./base/index.js')(Object);


/* add specific data access here */

module.exports.findByName = function(req,res)
    {
        Object.Model.find({name:req.param('name')}, function (err, result) {
            if (err) {
                res.send(400, { message: err });
            }else{
                res.json(result);
            }
        });
    };