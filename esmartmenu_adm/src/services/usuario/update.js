const Usuario = require('./../../schemas/usuario')

module.exports = (req, res) => {
	Usuario
		.findById(req.params.id)
		.then((usuario) => {
			usuario.senha = req.body.senha

			usuario.setPassword(usuario.senha, (error, updated, passError) => {
				if (error || passError) {
					return
				}

				updated.save()

				User
					.findByIdAndUpdate(req.params.id, req.body)
					.then((user) => {
						return res.redirect('/usuario')
					})
			})
		})
		.catch((error) => {

		})
}
