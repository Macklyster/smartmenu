const express = require('express')
const router = express.Router()
const uploadS3 = require('./middleware/s3')

const isLoggedIn = require('./../services/auth/loggedin')

router.get('/', require('./../services/banner/index'))
router.get('/new', require('./../services/banner/new'))
router.get('/:id', require('./../services/banner/show'))
router.post('/', /*isLoggedIn,*/ uploadS3.array('images3', 1), require('./../services/banner/create'))

router.put('/:id', require('./../services/banner/update'))
router.delete('/:id', require('./../services/banner/destroy'))

module.exports = router
