const express = require('express')
const router = express.Router()

const isLoggedIn = require('./../services/auth/loggedin')

router.get('/', /*isLoggedIn,*/ require('./../services/relvendasperiodo/index'))


module.exports = router
