/**
 * Author : Edouard Germain
 *
 */

var mongoose=require('mongoose');

var ShapeSchema = mongoose.Schema({
    type: String,
    position_x: Number,
    position_y: Number
});

var ObjectSchema = mongoose.Schema({
        time_start: {
            type: Number,
            required: true
        },
        time_end: {
            type: Number
        },
        text:String,
        shape:ShapeSchema,
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' }


    },
    {// optionnal : add createdAt and updatedAt fields
        timestamps: true
    });


exports.Schema = ObjectSchema;

exports.Model = mongoose.model('Annotations', ObjectSchema);