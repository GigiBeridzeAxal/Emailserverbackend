const DB = require('../models/usermodel')


const postcontroller = async(req,res) => {

    const {userid , Key} = req.body

    if(!userid || Key != process.env.KEY){

    }else{
     const data = await DB.find({id: userid})
     
     if(data[0] == null){


          


                const create = DB.create({

                    id: userid,
                    credits:15
                })
                if(create){
                    res.json("Created")
                }else{
                    res.json("Cant Create")
                }



     }else{
        res.json(data[0])
     }
    }



}

module.exports = {postcontroller}