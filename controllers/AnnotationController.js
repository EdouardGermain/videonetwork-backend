var Object = require('../models/Annotation.js');
var Video = require('../models/Video.js');

module.exports = require('./base/index.js')(Object);

module.exports.add = function(req,res)
{
    req.body.author = req.user;
    Object.Model.create(req.body, function (err, result) {
        if (err) {
            res.send(500, {message: err});
        } else {
            Video.Model.findByIdAndUpdate(req.body.video,
                {$push: {annotations: result}},
                {safe: true, upsert: true},
                function(err) {
                    if (err) {
                        res.send(400, {message: err});
                    }else{
                        res.send(201, result);
                    }

                }
            );

        }
    });
};
