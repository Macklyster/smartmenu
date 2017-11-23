const Relcliente = require('./../../schemas/cliente')

module.exports = (req, res) => {
	Relcliente
		.find({})
		.then((clientes) => {
			if (!clientes) {
				return res.redirect('/relcliente')
			}

			return res.render('relcliente/index', {
				title: 'Admin E-Smartmenu - Relatório Cliente',
				layout: 'layouts/main',
				user: req.user || undefined,
				clientes
			})
		})
		.catch((error) => {
			return res.redirect('/relcliente')
		})
}