var mongoose=require('mongoose');


var ObjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }

},
    {// optionnal : add createdAt and updatedAt fields
        timestamps: true
    });


exports.Schema = ObjectSchema;

exports.Model = mongoose.model('Users', ObjectSchema);