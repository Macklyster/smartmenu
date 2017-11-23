const Banner = require('./../../schemas/banner')
const slugfy = require('./../../utils/slugfy')

module.exports = (req, res) => {

	let slug = slugfy(req.body.nome)

	req.body.slug = slug

	req.body.image = ''

	if (req.files && req.files.length) {
		req.body.image = req.files && req.files[0] && req.files[0].location
	}
	
	Banner
		.create(req.body)
		.then((banner) => {
			return res.redirect('/banner')
		})
		.catch((error) => {

		})
}
