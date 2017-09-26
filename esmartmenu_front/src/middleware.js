const Categoria = require('./schemas/categoria')
const Carrinho = require('./schemas/carrinho')

module.exports = (app) => {
	app.use((req, res, next) => {
		Categoria
			.find({
				enable: true
			})
			.then((categorias) => {
				res.locals.categorias_menu = categorias

				return next()
			})
			.catch((error) => {

			})
	})

	app.use((req, res, next) => {
		let carrinho_id = req.session.carrinho_id

		Carrinho
			.findById(carrinho_id)
			.then((carrinho) => {
				res.locals.carrinho_g = {
					_id: carrinho && carrinho._id || undefined,
					count: 0
				}

				carrinho && carrinho.produtos && carrinho.produtos.forEach((item) => {
					return res.locals.carrinho_g.count = res.locals.carrinho_g.count + item.quantidade
				})

				return next()
			})
			.catch((error) => {
				console.log(error)
			})
	})

}
