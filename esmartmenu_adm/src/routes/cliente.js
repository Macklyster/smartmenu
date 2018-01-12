const express = require('express')
const router = express.Router()

const isLoggedIn = require('./../services/auth/loggedin')

router.get('/', /*isLoggedIn,*/ require('./../services/cliente/index'))
router.get('/new', /*isLoggedIn,*/ require('./../services/cliente/new'))
router.get('/:id', /*isLoggedIn,*/ require('./../services/cliente/show'))
router.post('/', /*isLoggedIn,*/ require('./../services/cliente/create'))

router.put('/:id', /*isLoggedIn,*/ require('./../services/cliente/update'))
router.delete('/:id', /*isLoggedIn,*/ require('./../services/cliente/destroy'))


module.exports = router