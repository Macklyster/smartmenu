const express = require('express')
const router = express.Router()

const isLoggedIn = require('./../services/auth/loggedin')

router.get('/', /*isLoggedIn,*/ require('./../services/dashvendasperiodo/index'))


module.exports = router
