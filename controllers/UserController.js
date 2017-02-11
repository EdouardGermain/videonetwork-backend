/**
 * Author : Edouard Germain
 *
 * import base/index.js + override update because we need to hash the password
 * some functions to upload file - only the 2 last are used
 *
 */



var Object = require('../models/User.js');
var bCrypt = require('bcrypt-nodejs');
var fs = require('fs');

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
/*
module.exports.uploadAvatar = function(req, res) {
    if (req.file) {
        console.dir(req.file);
        Object.Model.update({_id: req.user}, {avatar:req.file.path}, function (err) {
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

    }else res.end('Missing file');
};

module.exports.getAvatar = function(req, res) {
    Object.Model.findById(req.param('id'), function (err, result) {
        if (err) {
            res.send(500, {message: err});
        }
        else if (!result) {
            res.send(404, {message: "not found"});
        }
        else {

            fs.createReadStream(result.avatar).pipe(res);
        }
    });
};

module.exports.uploadBackground = function(req, res) {
    if (req.file) {
        console.dir(req.file);
        Object.Model.update({_id: req.user}, {background:req.file.path}, function (err) {
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

    }else res.end('Missing file');
};

module.exports.getBackground = function(req, res) {
    Object.Model.findById(req.param('id'),function (err, result) {
        if (err) {
            res.send(500, { message: err });
        }
        else if(!result){
            res.send(404, { message: "not found" });
        }
        else{

            fs.createReadStream(result.background).pipe(res);
        }
    });

};
*/

module.exports.uploadPhoto = function(req, res) {
    console.log(req.file);
    if (req.file) {
        res.send(200,{url:'https://node.edouardg.fr/photo/'+req.file.filename});

    }else res.send(400,{message:'Missing file'});
};

module.exports.getPhoto = function(req, res) {
            fs.createReadStream('./tmp/'+req.param('filename')).pipe(res);
};