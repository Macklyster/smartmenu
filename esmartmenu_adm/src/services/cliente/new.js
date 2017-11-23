const Cliente = require('./../../schemas/cliente')

module.exports = (req, res) => {
	let cliente = new Cliente()

	return res.render('cliente/new', {
		title: 'Admin E-Smartmenu - Cliente',
		layout: 'layouts/main',
		user: req.user || undefined,
		cliente
	})
}
