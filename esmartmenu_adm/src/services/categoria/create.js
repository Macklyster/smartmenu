const Categoria = require('./../../schemas/categoria')
const slugfy = require('./../../utils/slugfy')

module.exports = (req, res) => {

	let slug = slugfy(req.body.nome)

	req.body.slug = slug

	Categoria
		.create(req.body)
		.then((categoria) => {
			return res.redirect('/categoria')
		})
		.catch((error) => {

		})
}
