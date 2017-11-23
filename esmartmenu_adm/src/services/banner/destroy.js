const Banner = require('./../../schemas/banner')

module.exports = (req, res) => {

	Banner
		.findByIdAndRemove(req.params.id)
		.then((banner) => {
			return res.redirect('/banner')
		})
		.catch((error) => {

		})
}
