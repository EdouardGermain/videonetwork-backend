/**
 * Author : Edouard Germain
 *
 * Playlist not usued in front..
 *
 */



var Object = require('../models/Playlist.js');

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


module.exports.getAllVideo =  function(req,res) {
    Object.Model.findById(req.param('id')).populate('videos').exec(function (err, result) {
        if (err) {
            res.send(500, { message: err });
        }else{
            res.json(result.videos);
        }
    });
};
module.exports.addVideo =  function(req,res) {
    Object.Model.findByIdAndUpdate(req.param('id'),
        {$addToSet: {videos: req.param('idvideo')}},
        function(err,result) {
            if (err) {
                res.send(500, {message: err});
            }else{
                res.send(200, result);
            }
        }
    );
};

module.exports.removeVideo =  function(req,res) {
    Object.Model.findByIdAndUpdate(req.param('id'),
        {$pull: {videos: req.param('idvideo')}},
        function(err) {
            if (err) {
                res.send(500, {message: err});
            }else{
                res.send(200, {message: "removed"});
            }
        }
    );
};


