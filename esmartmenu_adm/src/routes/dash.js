const express = require('express')
const router = express.Router()

const isLoggedIn = require('./../services/auth/loggedin')

const dashvendasperiodo = require('./../services/dash/dashvendasperiodo')

router.get('/', index)

module.exports = router