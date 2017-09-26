const Carrinho = require('./../../schemas/carrinho')

module.exports = (req, res) => {
	Carrinho
		.findById(req.params.id)
		.populate('produtos.produto')
		.populate('cliente')
		.then((carrinho) => {
			if (!carrinho) {
				return res.redirect('/')
			}

			carrinho.produtos.forEach((produto) => {
				return produto.total_preco = produto.quantidade * produto['produto'].preco_venda
			})

			carrinho.produtos.forEach((produto) => {
				return carrinho.total = carrinho.total + produto.total_preco
			})

			return res.render('carrinho/show', {
				title: 'Carrinho SmartMenu',
				layout: 'layouts/main',
				user: req.user || undefined,
				carrinho
			})
		})
}
