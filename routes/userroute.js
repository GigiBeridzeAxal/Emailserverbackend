const express = require('express')
const {  postcontroller, updateController } = require('../controllers/usercontroller')
const router = express.Router()


router.post('/' , postcontroller)
router.patch('/' , updateController)

module.exports = router