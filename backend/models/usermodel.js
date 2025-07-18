import mongoose from "mongoose";

let UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true 
    },
    password:{
        type:String,
        required:true
    },
    profilePicture:{
        type:String,
        default:''
    },
    age:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    },
    createdAt:{
         type:Date,
         default:Date.now
    },
})

export default mongoose.model('User', UserSchema);