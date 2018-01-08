const mongoose = require('mongoose')

/*const Carrinho = new mongoose.Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    frete: {
        type: Number,
        default: 0
    },
    produtos: [{
        produto: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Produto'
        },
        quantidade: {
            type: Number,
            required: true,
            default: 1
        }
    }],
    total: {
        type: Number,
        required: true,
        default: 0
    },
    acabado: {
        type: Boolean,
        default: false
    },
    criado: {
        type: Date,
        required: true,
        default: new Date()
    }
})*/

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
        type: Number,
        required: true,
        default: 0
    },
    preco_real: {
        type: Number,
        required: true,
        default: 0
    },
    desconto: {
        type: Number,
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

module.exports = mongoose.model('Carrinho', Carrinho)