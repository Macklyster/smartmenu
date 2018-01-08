const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const Usuario = new mongoose.Schema({
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
    data_nasc: [{
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
    }],
    id: {
        type: String,
        required: true
    },
    //contato: {
    email: {
        type: String,
        required: true
    },
    celular: {
        type: String,
        default: ''
    },
    //},
    endereco: {
        logradouro: {
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

Usuario.plugin(passportLocalMongoose, { usernameField: 'email' })

module.exports = mongoose.model('Usuario', Usuario)