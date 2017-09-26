const Carrinho = require('./../../schemas/carrinho')
const Produto = require('./../../schemas/produto')
const pagseguro = require('pagseguro')
const parseString = require('xml2js').parseString
const info = require('./../../configs/info')
const url = require('./../../utils/url')

module.exports = (req, res) => {
	Carrinho
		.findById(req.body.carrinho_id)
		.populate('produtos.produto')
		.populate('cliente')
		.then((carrinho) => {
			if (!carrinho) {
				return ;
			}

			carrinho && carrinho.produtos && carrinho.produtos.forEach((item) => {
				return item.preco_total = item.quantidade * item.produto.preco_venda
			})
			carrinho && carrinho.produtos && carrinho.produtos.forEach((item) => {
				return carrinho.total = carrinho.total + item.preco_total
			})

			carrinho.frente = 0
			carrinho.total = carrinho.total + carrinho.frente
			carrinho.finished = true

			let pag = new pagseguro({
				email: info.emailPag,
				token: info.tokenPag,
				mode: 'sandbox'
			})

			pag.currency('BRL')
				.reference(12345)

			let counter = 1

			carrinho && carrinho.produtos && carrinho.produtos.forEach((item) => {
				return pag.addItem({
					id: counter++,
					description: item && item.produto.desc,
					amount: item && item.produto && item.produto.preco_venda.toFixed(2).toLocaleString('en-US', {
						minimiumFractionDigits: 2
					}),
					quantity: item && item.quantidade,
					weight: 1
				})
			})

			pag.buyer({
				name: carrinho && carrinho.cliente && carrinho.cliente.nome,
				email: carrinho && carrinho.cliente && carrinho.cliente.email,
				phoneAreaCode: carrinho && carrinho.cliente && carrinho.cliente.celular.slice(0, 2),
				phoneNumber: carrinho && carrinho.cliente && carrinho.cliente.celular.slice(2, 11),
			})

			pag.shipping({
				type: 1,
				street: carrinho && carrinho.cliente && carrinho.cliente.endereco && carrinho && carrinho.cliente && carrinho.cliente.endereco.rua,
				number: carrinho && carrinho.cliente && carrinho.cliente.endereco && carrinho && carrinho.cliente && carrinho.cliente.endereco.numero,
				complement: 'nenhum',
				district: carrinho && carrinho.cliente && carrinho.cliente.endereco && carrinho && carrinho.cliente && carrinho.cliente.endereco.vizinhaca,
				postalCode: '29902-150',
				city: carrinho && carrinho.cliente && carrinho.cliente.endereco && carrinho && carrinho.cliente && carrinho.cliente.endereco.cidade,
				state: 'SP',
				country: 'BRA'
			})

			pag.setRedirectURL(url(req, '/pedido/acabado'))

			pag.send((error, result) => {
				if (error) {
					console.log(error)
				}

				parseString(result, (error, data) => {
					if (error) {
						console.log(error)
					}

					carrinho && carrinho.produtos && carrinho.produtos.forEach((item) => {
						return Produto
								.findById(item.produto)
								.then((produto) => {
									produto.quantidade = produto.quantidade - item.quantidade
									produto.save()
								})
					})

					let checkout_code = data && data.checkout && data.checkout.code && data.checkout.code[0]

					return res.redirect('https://sandbox.pagseguro.uol.com.br/v2/checkout/payment.html?code=' + checkout_code)

				})
			})
		})
}
