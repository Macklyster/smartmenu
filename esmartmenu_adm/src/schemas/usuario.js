const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const Usuario = new mongoose.Schema({
	email: {
		type: String,
		required: true
	},
	senha: {
		type: String
	}
})

Usuario.plugin(passportLocalMongoose, { usernameField: 'email'})

module.exports = mongoose.model('Usuario', Usuario)
