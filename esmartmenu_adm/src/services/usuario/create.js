const Usuario = require('./../../schemas/usuario')
const slugfy = require('./../../utils/slugfy')

module.exports = (req, res) => {
	let data_nasc = req.body.data_nasc.toString().split('/')
	let slug = slugfy(req.body.nome)

	let data = {
		id: req.body.cpf,
		nome: req.body.nome,
		slug: slug,
		data_nasc: {
			dia: data_nasc[0],
			mes: data_nasc[1],
			ano: data_nasc[2]
		},
		//contato: {
			email: req.body.email,
			celular: req.body.celular,
		//},
		endereco: {
			rua: req.body.rua,
			numero: req.body.numero_entrega,
			cidade: req.body.cidade,
			bairro: req.body.bairro,
			cep: req.body.cep
		}
	}

	Usuario
		.register(data, req.body.senha, (error, usuario) => {
			if (error) {
				console.log(data);
				return res.redirect('/')
			}

			return res.redirect('/usuario')
		})
}
