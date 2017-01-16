var mongoose=require('mongoose');


var ObjectSchema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
        videos:[{type: mongoose.Schema.Types.ObjectId, ref: 'Videos'}]


    },
    {// optionnal : add createdAt and updatedAt fields
        timestamps: true
    });


exports.Schema = ObjectSchema;

exports.Model = mongoose.model('Playlists', ObjectSchema);