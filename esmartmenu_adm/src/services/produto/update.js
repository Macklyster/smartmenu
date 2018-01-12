const Produto = require('./../../schemas/produto')

module.exports = (req, res) => {

    req.body.enable = 'enable' in req.body ? true : false

    Produto
        .findById(req.params.id)
        .then((produto) => {
            if (req.body.desconto > 0 && req.body.desconto != produto.desconto) {
                let desconto = req.body.desconto / 100
                let preco_real = req.body.preco_venda
                let preco_venda = req.body.preco_venda - (req.body.preco_venda * desconto)

                req.body.preco_real = preco_real
                req.body.preco_venda = preco_venda
            } else {
                req.body.preco_real = produto.preco_real
                req.body.preco_venda = req.body.preco_venda
            }

            if (!req.body.enable) {
                req.body.enable = false
            } else {
                req.body.enable = true
            }

            if (req.files && req.files.length) {
                req.body.image = req.files && req.files[0] && req.files[0].location
            }

            Produto
                .findByIdAndUpdate(req.params.id, req.body)
                .then((produto) => {
                    return res.redirect('/produto')
                })
        })
        .catch((error) => {

        })
}