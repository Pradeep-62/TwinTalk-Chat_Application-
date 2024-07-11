import mongoose from 'mongoose' 

const UserSchema =  new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
      type:String,
      required:true,
      unique:true
    },
    password:{
        type:String,
        required:true
    },
    profilePhoto:{
        type:String,
        default:""
    }
   
},{
    timestamps : true
});

export const User = mongoose.model('User',UserSchema)

