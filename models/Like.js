var mongoose=require('mongoose');


var ObjectSchema = mongoose.Schema({
        rate: {
            type: Number,
            required: true
        }

    },
    {// optionnal : add createdAt and updatedAt fields
        timestamps: true
    });


exports.Schema = ObjectSchema;

exports.Model = mongoose.model('Likes', ObjectSchema);