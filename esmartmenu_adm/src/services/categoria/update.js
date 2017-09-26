const Categoria = require('./../../schemas/categoria')

module.exports = (req, res) => {

	Categoria
		.findByIdAndUpdate(req.params.id, req.body)
		.then((categoria) => {
			return res.redirect('/categoria')
		})
		.catch((error) => {

		})
}
