const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const Cliente = new mongoose.Schema({
	id: {
		type: String,
		required: true
	},
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
	//contato: {
		email: {
			type: String,
			required: true
		},
		celular: {
			type: String,
			default: ''
		//}
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
		}
	},
	criado: {
		type: Date,
		required: true,
		default: new Date()
	}
})

Cliente.plugin(passportLocalMongoose, { usernameField: 'email'})

module.exports = mongoose.model('Cliente', Cliente)
