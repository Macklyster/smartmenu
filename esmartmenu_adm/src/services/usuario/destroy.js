const Usuario = require('./../../schemas/usuario')

module.exports = (req, res) => {

	Usuario
		.findByIdAndRemove(req.params.id)
		.then((usuario) => {
			return res.redirect('/usuario')
		})
		.catch((error) => {

		})
}
