const Produto = require('./../../schemas/produto')
const Categoria = require('./../../schemas/categoria')

module.exports = (req, res) => {
	Categoria
		.find({
			enable: true
		})
		.then((categorias) => {
			Produto
				.findById(req.params.id)
				.populate('categoria')
				.then((produto) => {
					if (!produto) {
						return res.redirect('/produto')
					}

					return res.render('produto/show', {
						title: 'Produto SmartMenu',
						layout: 'layouts/main',
						user: req.user || undefined,
						categorias,
						produto
					})

				})
		})
		.catch((error) => {

		})

}
