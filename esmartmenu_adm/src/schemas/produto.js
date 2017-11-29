const mongoose = require('mongoose')

const Produto = new mongoose.Schema({
	nome: {
		type: String,
		required: true
	},
	desc: {
		type: String,
		default: ''
	},
	image: {
		type: String
	},
	slug: {
		type: String,
		required: true
	},
	preco_venda: {
		type: String,
		required: true,
		default: 0
	},
	preco_real: {
		type: String,
		required: true,
		default: 0
	},
	desconto: {
		type: String,
		default: 0
	},
	categoria: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Categoria',
		required: true
	},
	quantidade: {
		type: Number,
		required: true,
		default: 0
	},
	enable: {
		type: Boolean,
		required: true,
		default: true
	},
	criado: {
		type: Date,
		required: true,
		default: new Date()
	}
})

module.exports = mongoose.model('Produto', Produto)
