const express = require('express')
const env = require('dotenv')
const ConnectDB = require('./config/ConnectDB')
const cors = require('cors')




env.config()
const app = express()
app.use(cors({
    origin: '*'
}))
app.use(express.json())


const routeFilter = (req, res, next) => {
    const {bcrypted} = req.body

    if(!bcrypted){
      throw new Error("Not Working")
    }
    next(); // გააგრძელეთ პროცესში
};

app.use(routeFilter)

app.use('/' , require('./routes/userroute'))




ConnectDB()


app.listen(3500 , console.log("Server Succesfuly Hosted"))