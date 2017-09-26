const Categoria = require('./../../schemas/categoria')

module.exports = (req, res) => {
	Categoria
		.find({})
		.then((categorias) => {
			if (!categorias) {
				return res.redirect('/categoria')
			}

			return res.render('categoria/index', {
				title: 'Admin E-Smartmenu',
				layout: 'layouts/main',
				user: req.user || undefined,
				categorias
			})
		})
		.catch((error) => {
			return res.redirect('/categoria')
		})
}
