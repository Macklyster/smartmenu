const Produto = require('./../../schemas/produto')

module.exports = (req, res) => {

	Produto
		.findByIdAndRemove(req.params.id)
		.populate('categoria')
		.then((produto) => {
			return res.redirect('/produto')
		})
		.catch((error) => {

		})
}
