const Usuario = require('./../../schemas/usuario')

module.exports = (req, res) => {
	let data = {
		email: req.body.email
	}

	Usuario
		.register(data, req.body.senha, (error, usuario) => {
			if (error) {
				return;
			}

			return res.redirect('/usuario')
		})
}
