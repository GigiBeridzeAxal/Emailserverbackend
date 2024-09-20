const DB = require('../models/usermodel')





const postcontroller = async(req,res) => {

    const {userid , Mailto , Text , Name} = req.body


    if(!userid){

        res.json("Somethin Went Wrong")

    }else{
       
        const data = await DB.find({id: userid})



        if(data[0] !== undefined){




          res.json(data[0])

                
                



     }else{

        
        const create = DB.create({

                    id: userid,
                    credits:15
                })
                if(create){



                    res.json("Created")
                }else{
                    res.json("Cant Create")
     }
    }
    }




}

const updateController = async(req,res) => {
  

    const {userid , Key} = req.body


    if(!userid){
        res.json("Dont Steal Any Information !!!")
    }else{
        
    const Creditsvalue = await DB.find({id:userid}) 
    console.log(Creditsvalue.data)




    const update = await DB.updateOne({id:userid} , {credits: Creditsvalue[0].credits - 3})

    if(update){ 
        res.json("Hello world")
    }else{
     res.json("Hello worawdasdawdld")
    }



    }




}

module.exports = {postcontroller , updateController}