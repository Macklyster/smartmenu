const express = require('express')
const router = express.Router()

const isLoggedIn = require('./../services/auth/loggedin')

router.get('/', /*isLoggedIn,*/ require('./../services/usuario/index'))
router.get('/new', /*isLoggedIn,*/ require('./../services/usuario/new'))
router.get('/:id', /*isLoggedIn,*/ require('./../services/usuario/show'))
router.post('/', /*isLoggedIn,*/ require('./../services/usuario/create'))

router.put('/:id', /*isLoggedIn,*/ require('./../services/usuario/update'))
router.delete('/:id', /*isLoggedIn,*/ require('./../services/usuario/destroy'))


module.exports = router
