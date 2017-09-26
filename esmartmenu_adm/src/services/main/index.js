module.exports = (req, res) => {
	return res.render('main/index', {
		title: 'Admin E-Smartmenu',
		layout: 'layouts/main',
		usuario: req.user || undefined
	})
}
