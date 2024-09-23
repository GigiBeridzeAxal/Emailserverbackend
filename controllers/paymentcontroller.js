
const  CryptoJS = require('crypto-js') 


const DB = require('../models/usermodel')



const paycontroller = async(req,res) => {
  
    const {buyedcredits , bcrypted , userid} = req.body
    const Password = CryptoJS.AES.decrypt(bcrypted , process.env.SECRETKEY).toString(CryptoJS.enc.Utf8)

    const user = await DB.find({id:userid})

    const usercredits = user[0].credits
    console.log("Ready To Transfer Data")
    


    if(!buyedcredits || !userid || Password !== process.env.Key){

        res.json("Dont Try To Steal Any Information !!!")
        console.log("Not WOrking")

    }else{
        console.log("WOrking")

        const fixedcredit = Number(buyedcredits) + Number(usercredits)


        const refillcredits = await DB.updateOne({id:userid} , {credits:fixedcredit})

        if(refillcredits){
            res.json("Your Credits Succesfuly Buyed")
        }else{
            res.json("Something Went Wrong")
        }

    }




     
}

module.exports = {paycontroller}