const Relprodutosmaisvendido = require('./../../schemas/produto')

module.exports = (req, res) => {
	Relprodutosmaisvendido
		.find({})
		.then((produtos) => {
			if (!produtos) {
				return res.redirect('/relprodutosmaisvendido')
			}

			return res.render('relprodutosmaisvendido/index', {
				title: 'Admin E-Smartmenu - Relatório Produtos mais Vendidos',
				layout: 'layouts/main',
				user: req.user || undefined,
				produtos
			})
		})
		.catch((error) => {
			return res.redirect('/relprodutosmaisvendido')
		})
}