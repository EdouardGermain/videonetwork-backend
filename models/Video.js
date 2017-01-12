var mongoose=require('mongoose');


var ObjectSchema = mongoose.Schema({
        url: {
            type: String,
            required: true
        },
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' }

    },
    {// optionnal : add createdAt and updatedAt fields
        timestamps: true
    });


exports.Schema = ObjectSchema;

exports.Model = mongoose.model('Videos', ObjectSchema);