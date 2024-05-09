const express = require('express')
const {  postcontroller, updateController } = require('../controllers/usercontroller')
const { paycontroller } = require('../controllers/paymentcontroller')
const router = express.Router()


router.post('/' , postcontroller)
router.patch('/' , updateController)
router.post('/pay' , paycontroller)

module.exports = router