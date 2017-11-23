const Banner = require('./../../schemas/banner')

module.exports = (req, res) => {

	Banner
		.findByIdAndUpdate(req.params.id, req.body)
		.then((banner) => {
			if (!req.body.enable) {
				req.body.enable = false
			} else {
				req.body.enable = true
			}

			if (req.files && req.files.length) {
				req.body.image = req.files && req.files[0] && req.files[0].location
			}
			return res.redirect('/banner')
		})
		.catch((error) => {

		})
}
