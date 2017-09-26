const Produto = require('./../../schemas/produto')
const Categoria = require('./../../schemas/categoria')

module.exports = (req, res) => {

	Categoria
		.find({
			enable: true
		})
		.then((categorias) => {
			let produto = new Produto()

			return res.render('produto/new', {
				title: 'Admin E-Smartmenu',
				layout: 'layouts/main',
				user: req.user || undefined,
				categorias,
				produto
			})
		})
		.catch((error) => {

		})
}
