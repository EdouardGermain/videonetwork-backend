var Object = require('../models/Playlist.js');

module.exports = require('./base/index.js')(Object);

module.exports.update =  function(req,res) {
    Object.Model.findByIdAndUpdate(req.param('id'),
        {$set : req.body,$addToSet: {videos: req.body['video']}},
        {multi:true},
        function(err,result) {
            if (err) {
                res.send(400, {err: err});
            }else{
                res.send(201, result);
            }
        }
    );
};



/*module.exports.update =  function(req,res) {
 Object.Model.findByIdAndUpdate(req.param('id'),
 {$set : req.body,$pull: {videos: req.body['video_to_remove']}},
 {multi:true},
 function(err,result) {
 if (err) {
 res.send(400, {err: err});
 }else{
 res.send(201, result);
 }
 }
 );
 };*/