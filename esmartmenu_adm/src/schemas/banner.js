const mongoose = require('mongoose')

const Banner = new mongoose.Schema({
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
	image: {
		type: String
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

module.exports = mongoose.model('Banner', Banner)
