/**
 * Author : Edouard Germain
 *
 * Configuration of mongoDB
 *
 *
 */


var mongoose = require('mongoose');
//const FS = require('fs');
//const CA = FS.readFileSync(__dirname + '/certificate/mongodb.pem');

module.exports = function() {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://edouardg.fr:27017/videonetwork',
        {

            server: {reconnectTries: Number.MAX_VALUE}
        })
};

