const express = require('express')
const router = express.Router()

const isLoggedIn = require('./../services/auth/loggedin')

router.get('/', isLoggedIn, require('./../services/categoria/index'))
router.get('/new', isLoggedIn, require('./../services/categoria/new'))
router.get('/:id', isLoggedIn, require('./../services/categoria/show'))
router.post('/', isLoggedIn, require('./../services/categoria/create'))

router.put('/:id', isLoggedIn, require('./../services/categoria/update'))
router.delete('/:id', isLoggedIn, require('./../services/categoria/destroy'))

module.exports = router
