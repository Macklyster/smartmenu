const Cliente = require('./../../schemas/cliente')
const slugfy = require('./../../utils/slugfy')

module.exports = (req, res) => {
	let aniversario = req.body.aniversario.toString().split('/')
	let slug = slugfy(req.body.nome)

	let data = {
		nome: req.body.nome,
		email: req.body.email,
		slug: slug,
		aniversario: {
			dia: aniversario[0],
			mes: aniversario[1],
			ano: aniversario[2]
		},
		id: req.body.cpf,
		celular: req.body.celular,
		endereco: {
			rua: req.body.rua,
			numero: req.body.numero_entrega,
			cidade: req.body.cidade,
			vizinhanca: req.body.vizinhanca
		}
	}

	Cliente
		.findById(req.params.id)
		.then((cliente) => {
			if (!cliente) {
				return res.redirect('/')
			}

			cliente.senha = req.body.senha

			cliente.setPassword(cliente.senha, (error, updated, passErr) => {
				if (error || passErr) {
					return res.redirect('/')
				}

				updated.save()

				Cliente
					.findByIdAndUpdate(req.params.id, data)
					.then((updated) => {
						return res.redirect('/conta/' + req.user.slug)
					})
			})
		})
		.catch((error) => {
			return res.redirect('/conta/' + req.user.slug)
		})
}
