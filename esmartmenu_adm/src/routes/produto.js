const express = require('express')
const router = express.Router()
const uploadS3 = require('./middleware/s3')

const isLoggedIn = require('./../services/auth/loggedin')

router.get('/', require('./../services/produto/index'))
router.get('/new', require('./../services/produto/new'))
router.get('/:id', require('./../services/produto/show'))
router.post('/', /*isLoggedIn,*/ uploadS3.array('images3', 1), require('./../services/produto/create'))

router.put('/:id', require('./../services/produto/update'))
router.delete('/:id', require('./../services/produto/destroy'))

module.exports = router
