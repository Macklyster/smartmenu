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

	Cliente.register(data, req.body.senha, (error, conta) => {
		if (error) {
			return res.redirect('/')
		}

		return res.redirect('/conta')
	})
}
