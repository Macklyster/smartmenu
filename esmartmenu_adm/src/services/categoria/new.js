const Categoria = require('./../../schemas/categoria')

module.exports = (req, res) => {
	let categoria = new Categoria()

	return res.render('categoria/new', {
		title: 'Admin E-Smartmenu - Categoria',
		layout: 'layouts/main',
		user: req.user || undefined,
		categoria
	})
}
