const Banner = require('./../../schemas/banner')

module.exports = (req, res) => {
	Banner
		.find({})
		.then((banners) => {
			if (!banners) {
				return res.redirect('/banner')
			}

			return res.render('banner/index', {
				title: 'Admin E-Smartmenu',
				layout: 'layouts/main',
				user: req.user || undefined,
				banners
			})
		})
		.catch((error) => {
			return res.redirect('/banner')
		})
}
