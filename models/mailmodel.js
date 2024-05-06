const mongoose = require('mongoose')

const MailSchema = mongoose.Schema({


    id:{
      type:String,
      required:true
    },
    Mailto:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Text:{
        type:String,
        required:true
    }  


})


module.exports = mongoose.model('mails', MailSchema)