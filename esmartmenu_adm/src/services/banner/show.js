const Banner = require('./../../schemas/banner')

module.exports = (req, res) => {
	Banner
		.findById(req.params.id)
		.then((banner) => {
			if (!banner) {
				return res.redirect('/banner')
			}

			return res.render('banner/show', {
				title: 'Banner',
				layout: 'layouts/main',
				user: req.user || undefined	,
				banner
			})

		})
}
