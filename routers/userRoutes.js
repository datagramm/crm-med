const express = require('express')
const router = express.Router()

const User = require('../controllers/user')

router.post('/signUp', User.signUp)
router.post('/signIn', User.signIn)
router.post('/requirePassword', User.requirePassword)
router.post('/requireMatch', User.requireMatch)

module.exports = router