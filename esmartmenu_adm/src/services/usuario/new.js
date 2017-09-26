const Usuario = require('./../../schemas/usuario')

module.exports = (req, res) => {
	let usuario = new Usuario()

	return res.render('usuario/new', {
		title: 'Admin E-Smartmenu',
		layout: 'layouts/main',
		usuario: req.user || undefined,
		data: usuario
	})
}
