const Produto = require('./../../schemas/produto')

module.exports = (req, res) => {

	Produto
		.findById(req.params.id)
		.then((produto) => {
			if (req.body.discount > 0 && req.body.discount != produto.discount) {
				let discount = req.body.discount / 100
				let real_price = req.body.sales_price
				let sales_price = req.body.sales_price - (req.body.sales_price * discount)

				req.body.real_price = real_price
				req.body.sales_price = sales_price
			} else {
				req.body.real_price = produto.real_price
				// req.body.sales_price = req.body.sales_price
			}

			if (!req.body.enable) {
				req.body.enable = false
			} else {
				req.body.enable = true
			}

			if (req.files && req.files.length) {
				req.body.image = req.files && req.files[0] && req.files[0].location
			}

			Product
				.findByIdAndUpdate(req.params.id, req.body)
				.then((produto) => {
					return res.redirect('/produto')
				})
		})
		.catch((error) => {

		})
}
