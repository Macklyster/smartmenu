module.exports = (req, res) => {
	if (!req.user) {
		return res.render('conta/index', {
			title: 'Conta',
			layout: 'layouts/main',
			user: req.user || undefined
		})
	}

	return res.redirect('/conta/' + req.user.slug)
}
