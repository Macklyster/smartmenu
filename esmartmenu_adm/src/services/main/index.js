module.exports = (req, res) => {
	return res.render('main/index', {
		title: 'Admin E-Smartmenu - Dashboard',
		layout: 'layouts/main',
		usuario: req.user || undefined
	})
}
