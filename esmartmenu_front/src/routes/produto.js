const express = require('express')
const router = express.Router()

router.get('/:slug', require('./../services/produto/show'))

module.exports = router
