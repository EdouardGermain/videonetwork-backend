var Object = require('../models/User.js');
var bCrypt = require('bcrypt-nodejs');

var createHash = function(password){
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
};

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

module.exports.update =  function(req,res) {
    if(req.body.password) req.body.password = createHash(req.body.password);
    if(req.param('id')==req.user._id){
        Object.Model.update({_id: req.param('id')}, req.body, function (err) {
            if (err) {
                res.send(400, {message: err});
            } else {
                Object.Model.findById(req.param('id'),function (err, result) {
                    if (err) {
                        res.send(400, { message: err });
                    }else{
                        res.json(result);
                    }
                });
            }
        });
    }else return res.send(401, {message: "Unauthorized"});

};