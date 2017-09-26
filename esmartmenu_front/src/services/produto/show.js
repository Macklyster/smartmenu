const Produto = require('./../../schemas/produto')

module.exports = (req, res) => {
	Produto
		.findOne({
			slug: req.params.slug
		})
		.populate('categoria')
		.then((produto) => {
			return res.render('produto/show', {
				title: 'Produto SmartMenu',
				layout: 'layouts/main',
				user: req.user || undefined,
				produto
			})
		})
		.catch((error) => {

		})
}
