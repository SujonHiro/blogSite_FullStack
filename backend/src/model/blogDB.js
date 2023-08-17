const mongoose=require("mongoose")
const blogSchema= mongoose.Schema(
    {
        title:{type: String,
            trim: true,
            required: true,
            maxLength: 32,
            unique: true,},
        img:{type:String,required: true},
        Description:{type:String},
        CreatorName:{type:String},
        CreatedDate:{type:Date,default:Date.now()}

    },{versionKey: false }
)
const blogPost=mongoose.model("blogpost",blogSchema)
module.exports= blogPost;