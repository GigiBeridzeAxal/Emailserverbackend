const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({


   id:{
    type:String,
    required:true,
    unique:true

},
credits:{
    type:Number,
    required:true
}


})





module.exports = mongoose.model('Users' , UserSchema)