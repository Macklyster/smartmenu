const express = require('express')
const router = express.Router()

router.get('/', require('./../services/main/'))
/*router.get('/', (req, res) => {
	return res.render('main/index', {
		title: 'E-Smartmenu',
		layout: 'layouts/base',
		user: req.user || undefined
	})
})*/

module.exports = router
