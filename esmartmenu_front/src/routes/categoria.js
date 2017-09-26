const express = require('express')
const router = express.Router()

router.get('/:slug', require('./../services/categoria/show'))


module.exports = router
