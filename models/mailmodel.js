const mongoose = require('mongoose')
const { Tourney } = require('next/font/google')

const MailSchema = mongoose.Schema({


    id:{
      type:String,
      required:true
    },
    By:{
        type:String,
        required:true
    },
    To:{
        type:String,
        required:true
    }

})


module.exports = mongoose.model('mails', MailSchema)