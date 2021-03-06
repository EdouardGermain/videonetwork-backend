

var mongoose=require('mongoose');

var ObjectSchema = mongoose.Schema(
    {
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
            required: true,
            select: false
        },
        isAdmin:Boolean,
        website : String,
        description : String,
        youtube_chanel : String,
        country : String,
        avatar:String,
        background:String


    },
    {// optionnal : add createdAt and updatedAt fields
        timestamps: true
    });


exports.Schema = ObjectSchema;

exports.Model = mongoose.model('Users', ObjectSchema);