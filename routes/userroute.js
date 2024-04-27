const express = require('express')
const {  postcontroller } = require('../controllers/usercontroller')
const router = express.Router()


router.post('/' , postcontroller)

module.exports = router