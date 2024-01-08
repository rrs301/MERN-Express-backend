const {default:mongoose}=require("mongoose")
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    image:String
})

module.exports=mongoose.model('user',userSchema)