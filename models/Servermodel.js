const mongoose = require('mongoose')

const ServerSchema = mongoose.Schema({


   owner:{
    type:String,
    required:true,


 },
 plan:{
    type:String,
    required:true,


 }, 
 servername:{
    type:String,
    required:true,


 }, 
 limit:{
   type:Number,
   required:true,


}, 
secure:{
   type:String,
   required:true,


}, 
status:{
   type:Boolean,
   required:true,


}, 






})





module.exports = mongoose.model('Servers' , ServerSchema)