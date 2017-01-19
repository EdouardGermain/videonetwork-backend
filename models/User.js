var mongoose=require('mongoose');

var ObjectSchema = mongoose.Schema({
        username: {
            type: String,
            unique : true,
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


exports.Schema = ObjectSchema;

exports.Model = mongoose.model('Users', ObjectSchema);