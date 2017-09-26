const Usuario = require('./../../schemas/usuario')

module.exports = (req, res) => {
	Usuario
		.find({})
		.then((usuarios) => {
			if (!usuarios) {
				return res.redirect('/usuario')
			}

			return res.render('usuario/index', {
				title: 'Admin E-Smartmenu',
				layout: 'layouts/main',
				usuario: req.user || undefined,
				usuarios
			})
		})
		.catch((error) => {
			return res.redirect('/usuario')
		})
}
