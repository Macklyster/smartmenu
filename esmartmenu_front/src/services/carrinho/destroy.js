const Carrinho = require('./../../schemas/carrinho')

module.exports = (req, res) => {
	Carrinho
		.findById(req.params.id)
		.populate('produtos')
		.then((carrinho) => {
			carrinho.produtos.pull({ _id: req.query.produto_id })
			carrinho.save()

			if (!carrinho.produtos.length) {
				return res.redirect('/')
			}

			return res.redirect('/carrinho/'.concat(req.params.id))
		})
}
