/**
 * Author : Edouard Germain
 *
 */

var mongoose=require('mongoose');


var ObjectSchema = mongoose.Schema({
        text: {
            type: String,
            required: true
        },
        author: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Users',
            required: true
        }

    },
    {// optionnal : add createdAt and updatedAt fields
        timestamps: true
    });


exports.Schema = ObjectSchema;

exports.Model = mongoose.model('Comments', ObjectSchema);