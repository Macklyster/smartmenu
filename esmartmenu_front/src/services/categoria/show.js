const Produto = require('./../../schemas/produto')

module.exports = (req, res) => {
	Produto
		.find({})
		.populate({
			path: 'categoria',
			match: {
				slug: req.params.slug
			}
		})
		.then((result) => {
			if (!result) {
				return res.redirect('/404')
			}

			let produtos = result.filter(el => el['categoria'] !== undefined &&
				el.categoria &&
				el.categoria.slug === req.params.slug ||
				false)
			//console.log(produtos)
			return res.render('categoria/show', {
				title: 'Produto por Categoria SmartMenu',
				layout: 'layouts/main',
				user: req.user || undefined,
				produtos
			})
		})
		.catch((error) => {
			console.log(error)
		})
}
