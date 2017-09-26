const Usuario = require('./../../schemas/usuario')

module.exports = (req, res) => {
	Usuario
		.findById(req.params.id)
		.then((usuario) => {
			if (!usuario) {
				return res.redirect('/usuario')
			}

			return res.render('usuario/show', {
				title: 'usuario',
				layout: 'layouts/main',
				usuario: req.user || undefined	,
				data: usuario
			})

		})
}
