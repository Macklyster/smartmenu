const Categoria = require('./../../schemas/categoria')

module.exports = (req, res) => {

	Categoria
		.findByIdAndRemove(req.params.id)
		.then((categoria) => {
			return res.redirect('/categoria')
		})
		.catch((error) => {

		})
}
