import mongoose from 'mongoose'

const userSchema =new mongoose.Schema({
  naem:{
    type:String,
    unique:true,
    required:true
  },
  password:{
    type:String,
    required:true,
  },
  email:{
    type:email,
    required:true
  },
  timeCreated:{
    type:Date,
    default:Date.now
  }
})

const userModel=new mongoose.model("user",userSchema)
export {userModel};
