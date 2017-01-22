var mongoose = require('mongoose');

module.exports = function() {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/videonetwork',
        {server: {reconnectTries: Number.MAX_VALUE}});
};

