const express = require('express')
const router = express.Router()

router.get('/:id', require('./../services/carrinho/show'))
router.post('/', require('./../services/carrinho/create'))
router.delete('/:id', require('./../services/carrinho/destroy'))

module.exports = router
