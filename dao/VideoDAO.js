var Object = require('../models/Video.js');

module.exports = require('./base/index.js')(Object);

module.exports.findById = function(req,res)
{
    Object.Model.findById(req.param('id')).populate('author').populate('comments').exec( function (err, result) {
        if (err) {
            res.send(400, { err: err });
        }else{
            res.json(result);
        }
    });
};