const Relpedidovendas = require('./../../schemas/carrinho')

module.exports = (req, res) => {
	Relpedidovendas
		.find({})
		.populate({
			path: 'cliente',
			match: {
				slug: req.params.slug
			}
		})
		.then((result) => {
			if (!result) {
				return res.redirect('/404')
			}

			let clientes = result.filter(el => el['cliente'] !== undefined &&
				el.cliente &&
				el.cliente.slug === req.params.slug ||
				false)
				console.log(clientes)
		})


	/*Relpedidovendas
		.find({})
		.then((carrinhos) => {
			if (!carrinhos) {
				return res.redirect('/relvendaperiodo')
			}

			return res.render('relvendaperiodo/index', {
				title: 'Admin E-Smartmenu - Relatório Pedido Vendas',
				layout: 'layouts/main',
				user: req.user || undefined,
				carrinhos
			})
		})
		.catch((error) => {
			return res.redirect('/relvendaperiodo')
		})*/
}
