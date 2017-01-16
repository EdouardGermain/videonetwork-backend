var mongoose=require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var ObjectSchema = mongoose.Schema({
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }


},
    {// optionnal : add createdAt and updatedAt fields
        timestamps: true
    });

ObjectSchema.plugin(passportLocalMongoose);

exports.Schema = ObjectSchema;

exports.Model = mongoose.model('Users', ObjectSchema);