const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const Cliente = new mongoose.Schema({
	nome: {
		type: String,
		required: true
	},
	slug: {
		type: String,
		required: true
	},
	senha: {
		type: String
	},
	data_nasc: {
		dia: {
			type: Number,
			required: true,
			default: ''
		},
		mes: {
			type: Number,
			required: true,
			default: ''
		},
		ano: {
			type: Number,
			required: true,
			default: ''
		}
	},
	id: {
		type: String,
		required: true
	},
	//contato:{
		email: {
			type: String,
			required: true
		},
		celular: {
			type: String,
			default: ''
	//	}
	},
	endereco: {
		rua: {
			type: String,
			required: true
		},
		numero: {
			type: Number,
			required: true
		},
		cidade: {
			type: String,
			required: true
		},
		bairro: {
			type: String,
			required: true
		},
		cep: {
			type: Number,
			required: true
		}
	}
})

Cliente.plugin(passportLocalMongoose, { usernameField: 'email'})

module.exports = mongoose.model('Cliente', Cliente)
