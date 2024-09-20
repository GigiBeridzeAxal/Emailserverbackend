const Servermodel = require("../models/Servermodel");






const getserver = async(req,res) =>{

    const {owner} = req.body

    if(!owner){
        res.json("All Fields Are Required")
    }else{
        const servers = await Servermodel.find({owner:owner})
        res.json(servers)

        
   
    }

}


const deleteserver = async(req,res) => {

    const {id} = req.body

    if(!id){
        res.json("Id not Defined")
    }else{
        const deletes = await Servermodel.deleteOne({_id:id})
    }

}

const changeserverstatus = async(req,res) => {

    const {id} = req.body

    if(!id){
        res.json("Id Not defined")
    }else{
        
        const find = await Servermodel.find({_id:id})
        
        if(find[0].status == true){
            const update = await Servermodel.updateOne({_id:id} , {status:false})
        }
        if(find[0].status == false){
            const update = await Servermodel.updateOne({_id:id} , {status:true})
        }

    }

}

const apisend = async(req,res) => {

    const {message, email , username , apikey , apipassword} = req.body

    if(!message || !email || !username || !apikey || !apipassword){
        res.json("All Fields Are Required")
    }else{
        const checkapi = await Servermodel.find({_id:apikey})

        if(checkapi[0].status == false){
            res.json("Server is Shutdown")
            console.log("Server is Shutdown")

        }else{


        

        if(checkapi[0].secure == apipassword){

          
          

            const sendapimail = async(req,res) => {


            
                console.log(message,email,username)
            
            
            const nodemailer = require("nodemailer");
            
            
                const transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 465,
                    secure: true, // Use `true` for port 465, `false` for all other ports
                    auth: {
                      user: "beridzegigi19@gmail.com",
                      pass: "cdcs xqtm mqsu qktj",
                    },
                    tls: {
                        rejectUnauthorized: false, // Ignore self-signed certificate error
                      },
                  });
            
            // async..await is not allowed in global scope, must use a wrapper
            async function main() {
              // send mail with defined transport object
              const info = await transporter.sendMail({
                from: '"EmailServer" <maddison53@ethereal.email>', // sender address
                to: email, // list of receivers
                subject: username, // Subject line
                text: message, // plain text body
                html: message, // html body
              });
            
              if(info){
                const changelimit = async(req,res) => {

                     const get = await Servermodel.find({_id:apikey})
                     if(get[0].limit < 10000){
                        const update = await Servermodel.updateOne({_id:apikey} , {limit: get[0].limit + 1})
                     }

                }
                changelimit()
              }
              console.log("Message sent: %s", info.messageId);
              // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
            }
            
            main().catch(console.error);
            
            
            }
            if(checkapi[0].plan == 'silver'){
            if(checkapi[0].limit < 500){
                sendapimail()
            }
  }
  if(checkapi[0].plan == 'golden'){
    if(checkapi[0].limit < 2500){
        sendapimail()
    }
}
if(checkapi[0].plan == 'emerald'){
    if(checkapi[0].limit < 7000){
        sendapimail()
    }
}
            res.json("Succesfuly Send Message")



        }
    }

                
}

    

}

const createserver = async(req,res) => {
    console.log("Start Creating")

    const {plan , owner , servername} = req.body

    if(!plan || !servername || !owner){
        res.json("All Fields Are Required")
        console.log("all fields required")
    }else{
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = ''

        for(let i = 0; i < 16; i++){
            result += characters.charAt(Math.floor(Math.random() * 16))
        }

        const create = await Servermodel.create({
            plan:plan,
            owner:owner,
            servername:servername,
            limit:0,
            secure:result,
            status:true
        })
        if(create){
            res.json("Server Succesfuly Launched")
            console.log("created")
        }else{
            res.json("Something Went Wrong Please Try Again")
        }


    }



}

module.exports = {createserver, getserver , changeserverstatus , deleteserver , apisend}

