const mongoose = require('mongoose')

const Categoria = new mongoose.Schema({
	nome: {
		type: String,
		required: true
	},
	desc: {
		type: String,
		default: ''
	},
	slug: {
		type: String,
		required: true
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

module.exports = mongoose.model('Categoria', Categoria)
