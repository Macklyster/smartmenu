const express = require('express')
const router = express.Router()

const isLoggedIn = require('./../services/auth/loggedin')

const index = require('./../services/dash/index')
const de15dias = require('./../services/dash/de15dias')

router.get('/', index)
router.get('/de15dias', de15dias)

module.exports = router