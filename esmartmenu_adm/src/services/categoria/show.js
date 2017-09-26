const Categoria = require('./../../schemas/categoria')

module.exports = (req, res) => {
	Categoria
		.findById(req.params.id)
		.then((categoria) => {
			if (!categoria) {
				return res.redirect('/categoria')
			}

			return res.render('categoria/show', {
				title: 'Categoria',
				layout: 'layouts/main',
				user: req.user || undefined	,
				categoria
			})

		})
}
