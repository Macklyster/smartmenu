const Cliente = require('./../../schemas/cliente')

module.exports = (req, res) => {
	Cliente
		.findOne({
			slug: req.params.slug
		})
		.then((cliente) => {
			if (!cliente) {
				return res.redirect('/')
			}

			cliente = cliente.toObject()

			cliente.aniversario = cliente.aniversario.dia + '/' + cliente.aniversario.mes + '/' + cliente.aniversario.ano
			return res.render('conta/minha-conta', {
				title: 'Minha Conta',
				cliente: cliente,
				layout: 'layouts/main',
				user: req.user || undefined
			})
		})
		.catch((error) => {
			return ''
		})
}
