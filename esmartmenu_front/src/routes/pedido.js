const express = require('express')
const router = express.Router()

const isLoggedIn = require('./../services/conta/loggedin')

router.get('/acabado', isLoggedIn, require('./../services/pedido/acabado'))
router.post('/', isLoggedIn, require('./../services/pedido/finalizar'))

module.exports = router
