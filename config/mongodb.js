var mongoose = require('mongoose');
//const FS = require('fs');
//const CA = FS.readFileSync(__dirname + '/mongodb.pem');

module.exports = function() {
    mongoose.Promise = global.Promise;
    //mongoose.connect('mongodb://51.254.201.1:27017/videonetwork',
    mongoose.connect('mongodb://edouardg.fr:27017/videonetwork',
        {server: {reconnectTries: Number.MAX_VALUE}})
};

