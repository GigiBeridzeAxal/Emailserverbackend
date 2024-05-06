const DB = require('../models/usermodel')
const MailDB = require('../models/mailmodel')
const CrpytoJs = require('crypto-js')

const postcontroller = async(req,res) => {

    const {userid , Key , Mailto , Text , Name} = req.body
    const password = CrpytoJs.AES.decrypt(Key , process.env.SECRETKEY).toString(CrpytoJs.enc.Utf8)

    if(!userid || password !== process.env.Key){

    }else{

     const data = await DB.find({id: userid})
     console.log(data[0] == null)

     
     if(data[0] == null){


          

                const create = DB.create({

                    id: userid,
                    credits:15
                })
                if(create || mailcrate){
                    res.json("Created")
                }else{
                    res.json("Cant Create")
                }



     }else{
        res.json(data[0])
     }
    }



}

const updateController = async(req,res) => {
  

    const {userid , Key} = req.body
    const password = CrpytoJs.AES.decrypt(Key , process.env.SECRETKEY).toString(CrpytoJs.enc.Utf8)

    if(!userid || password !== process.env.Key){
        res.json("Dont Steal Any Information !!!")
    }else{
        
    const Creditsvalue = await DB.find({id:userid}) 




    const update = await DB.updateOne({id:userid} , {credits: Creditsvalue[0].credits - 3})

    if(update){
         res.json("Hello world")
    }else{
     res.json("Hello worawdasdawdld")
    }



    }




}

module.exports = {postcontroller , updateController}