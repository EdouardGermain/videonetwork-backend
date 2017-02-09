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
        .then( function (result) {
        if (!result){
            res.send(404, { message: "Not found" });
        }else if(result.privacy && result.author != req.user){
            res.send(401, { message: "Unauthorized" });
        }
        else{

            res.json(result);
        }
    });
};

    module.exports.videoCurrentUser = function(req,res)
{
    Object.Model.find({author:req.user}, function (err, result) {
        if (err) {
            res.send(500, { message: err });
        }else{
            var videos = [];
            result.forEach(function (video, index) {
                var to_add = {};
                to_add._id = video._id;
                to_add.updatedAt = video.updatedAt;
                to_add.createdAt = video.createdAt;
                to_add.name = video.name;
                to_add.youtube = video.youtube;
                to_add.thunbmail = video.thunbmail;
                to_add.author = video.author;
                to_add.like = video.likes.length;
                to_add.comment = video.comments.length;
                videos.push(to_add);
            });
            res.json(videos);
        }
    });
};
module.exports.videoByUserId = function(req,res)
{
    Object.Model.find({author:req.param('id'),privacy:false}, function (err, result) {
        if (err) {
            res.send(500, { message: err });
        }else{
            var videos = [];
            result.forEach(function (video, index) {
                var to_add = {};
                to_add._id = video._id;
                to_add.updatedAt = video.updatedAt;
                to_add.createdAt = video.createdAt;
                to_add.name = video.name;
                to_add.youtube = video.youtube;
                to_add.thunbmail = video.thunbmail;
                to_add.author = video.author;
                to_add.like = video.likes.length;
                to_add.comment = video.comments.length;
                videos.push(to_add);
            });
            res.json(videos);
        }
    });
};

    module.exports.findByIdYoutube = function(req,res)
    {
        Object.Model.find({youtube:req.param('youtube'),privacy:false}, function (err, result) {
            if (err) {
                res.send(500, { message: err });
            }else{
                var videos = [];
                result.forEach(function (video, index) {
                    var to_add = {};
                    to_add._id = video._id;
                    to_add.updatedAt = video.updatedAt;
                    to_add.createdAt = video.createdAt;
                    to_add.name = video.name;
                    to_add.youtube = video.youtube;
                    to_add.thunbmail = video.thunbmail;
                    to_add.author = video.author;
                    to_add.comment = video.comments.length;
                    to_add.like = video.likes.length;

                    videos.push(to_add);
                });
                res.json(videos);
            }
        });
};