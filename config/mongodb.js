/**
 * Author : Edouard Germain
 *
 * Configuration of mongoDB
 *
 *
 */


var mongoose = require('mongoose');
const FS = require('fs');
const CA = FS.readFileSync(__dirname + '/certificate/mongodb.pem');

module.exports = function() {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/videonetwork?ssl=true',
        {
            sslValidate: true,
            sslCA: CA,
            server: {reconnectTries: Number.MAX_VALUE}
        })
};

