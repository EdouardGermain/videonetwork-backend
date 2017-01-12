var mongoose=require('mongoose');


var ObjectSchema = mongoose.Schema({
        path: {
            type: String,
            required: true
        },
        name: {
                type: String,
                required: true
            }


        // décalage temps ?

    },
    {// optionnal : add createdAt and updatedAt fields
        timestamps: true
    });


exports.Schema = ObjectSchema;

exports.Model = mongoose.model('Subtitles', ObjectSchema);