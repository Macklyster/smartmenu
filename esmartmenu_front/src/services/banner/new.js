const Banner = require('./../../schemas/banner')

module.exports = (req, res) => {
	let banner = new Banner()

	return res.render('banner/new', {
		title: 'Admin E-Smartmenu - Banners',
		layout: 'layouts/main',
		user: req.user || undefined,
		banner
	})
}
