const express = require('express')
const router = express.Router()

router.get('/:slug', require('./../services/banner/show'))

module.exports = router