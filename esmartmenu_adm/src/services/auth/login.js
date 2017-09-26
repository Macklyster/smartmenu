const Usuario = require('./../../schemas/usuario')

module.exports = (req, res) => {
	Usuario.authenticate()(req.body.email, req.body.senha, (error, user, opts) => {
		if (error || user == false) {
			return res.redirect('/auth')
		}

		return req.login(user, (error) => {
			if (error) {
				return res.redirect('/auth')
			}

			return res.redirect('/')
		})
	})
}
