const mongoose = require('mongoose')

const Carrinho = new mongoose.Schema({
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
})

module.exports = mongoose.model('Carrinho', Carrinho)