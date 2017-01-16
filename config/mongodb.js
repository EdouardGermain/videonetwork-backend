
module.exports = function(mongoose) {
    mongoose.connect('mongodb://localhost:27017/videonetwork', {server: {reconnectTries: Number.MAX_VALUE}});
};

