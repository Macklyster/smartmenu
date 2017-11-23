module.exports = (req, res) => {
	return res.render('auth/index', {
		title: 'Admin E-Smartmenu Login',
		layout: 'layouts/login'
	})
}
