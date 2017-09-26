const express = require('express')
const router = express.Router()

const Cliente = require('./../schemas/cliente')
const isLoggedIn = require('./../services/conta/loggedin')

router.get('/', require('./../services/conta/index'))

router.get('/novo', (req, res) => {
	const cliente = new Cliente()

	return res.render('conta/novo', {
		title: 'Registrar - Conta',
		cliente: cliente,
		layout: 'layouts/main',
		user: req.user || undefined
	})
})

router.post('/', require('./../services/conta/create'))
router.post('/login', require('./../services/conta/login'))
router.get('/logout', require('./../services/conta/logout'))
router.get('/:slug', isLoggedIn, require('./../services/conta/show'))
router.put('/:id', isLoggedIn, require('./../services/conta/update'))
module.exports = router
