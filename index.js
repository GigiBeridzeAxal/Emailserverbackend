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

app.use('/' , require('./routes/userroute'))

ConnectDB()


app.listen(3500 , console.log("Server Succesfuly Hosted"))