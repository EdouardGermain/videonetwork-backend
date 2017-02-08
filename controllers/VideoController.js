var Object = require('../models/Video.js');
require('../models/Comment.js');
require('../models/User.js');

module.exports = require('./base/index.js')(Object);


module.exports.add = function(req,res) {
    req.body.author = req.user;
    Object.Model.create(req.body, function (err, result) {
        if (err) {
            res.send(400, {message: err});
        } else {
            res.send(201, result);
        }
    });

};

module.exports.findById = function(req,res)
{
    Object.Model.findById(req.param('id'))
        .populate('author')
        .populate({
            path: 'comments',
            populate: {
                path: 'author'
            }
        })
        .populate({
                path: 'likes',
                populate: {
                    path: 'author'
                }
        })
        .populate({
            path: 'annotations',
            populate: {
                path: 'author'
            }
        })
        .then( function (err, result) {
        if (err) {
            res.send(400, { message: err });
        }else if (!result){
            res.send(404, { message: "Not found" });
        }
        else{
            res.json(result);
        }
    });
};

    module.exports.findByIdYoutube = function(req,res)
    {
        Object.Model.find({youtube:req.param('youtube')}, function (err, result) {
            if (err) {
                res.send(500, { message: err });
            }else{
                res.json(result);
            }
        });
};