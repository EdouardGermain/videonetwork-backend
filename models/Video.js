var mongoose=require('mongoose');


var ObjectSchema = mongoose.Schema({
        url: {
            type: String,
            required: true
        },
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
        comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comments' }],
        annotations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Annotations' }],
        likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Likes' }]

    },
    {// optionnal : add createdAt and updatedAt fields
        timestamps: true
    });


exports.Schema = ObjectSchema;

exports.Model = mongoose.model('Videos', ObjectSchema);