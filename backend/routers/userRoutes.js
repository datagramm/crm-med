const express = require('express')
const router = express.Router()

const User = require('../src/controllers/user')
const Password = require('../src/middleware/password')
router.use('/signUp', Password.requirePassword)
router.use('/signUp', Password.requireMatch)
router.post('/signUp', User.signUp)
router.post('/signIn', User.signIn)


module.exports = router