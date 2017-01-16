var mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect('mongodb://localhost:27017/videonetwork',
        {server: {reconnectTries: Number.MAX_VALUE}});
};
