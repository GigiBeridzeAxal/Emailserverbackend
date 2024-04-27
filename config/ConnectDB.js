const mongoose = require('mongoose')


const ConnectDB = async() => {

   
    try{
      const connect = await mongoose.connect(process.env.DB)
      if(connect){
        console.log(connect.connection.host , "You Succesfully Connected DB ")
      }

    }catch(err){
        console.log(err)
    }

}

module.exports = ConnectDB