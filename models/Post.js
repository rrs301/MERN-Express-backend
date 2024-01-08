const {default:mongoose}=require("mongoose")


const postSchema=new mongoose.Schema({
    postText:{
        type:String,
        require:true
    },
    createdAt:String,
    imageUrl:String,
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,ref:'user',
        require:true
    },
    likes:[{type:mongoose.Schema.Types.ObjectId,ref:'user'}],
    comments:[{type:mongoose.Schema.Types.ObjectId,ref:'comment'}]
})

module.exports=mongoose.model('post',postSchema)