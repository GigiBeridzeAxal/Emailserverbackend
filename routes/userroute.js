const express = require('express')
const {  postcontroller, updateController } = require('../controllers/usercontroller')
const { paycontroller } = require('../controllers/paymentcontroller')

const { createserver, getserver, changeserverstatus , deleteserver, apisend } = require('../controllers/Server')
const { sendmail } = require('../controllers/Nodemailer')
const router = express.Router()


router.post('/' , postcontroller)
router.patch('/' , updateController)
router.post('/pay' , paycontroller)
router.post('/sendmessage' , sendmail)
router.post('/createserver' , createserver)
router.post('/getserver' , getserver)
router.post('/status' , changeserverstatus)
router.post('/deleteserver' , deleteserver)
router.post('/api' , apisend)



module.exports = router