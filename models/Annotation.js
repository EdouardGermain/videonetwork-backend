var mongoose=require('mongoose');

var ShapeSchema = mongoose.Schema({
    max: Number,
    min: Number
});

var ObjectSchema = mongoose.Schema({
        time: {
            type: Number,
            required: true
        },
        text:String,
        shape:ShapeSchema

        // décalage temps ?

    },
    {// optionnal : add createdAt and updatedAt fields
        timestamps: true
    });


exports.Schema = ObjectSchema;

exports.Model = mongoose.model('Annotations', ObjectSchema);