const Carrinho = require('./../../schemas/carrinho')
const Produto = require('./../../schemas/produto')

module.exports = (req, res) => {
    if (!req.session.carrinho_id) {
        let carrinho = new Carrinho()
        return Produto
            .findById(req.body.produto_id)
            .then((produto) => {

                carrinho.produtos.push({ produto: produto._id })
                carrinho.cliente = req.user && req.user._id || undefined

                return carrinho
                        .save()
                        .then((carrinho) => {
                            req.session.carrinho_id = carrinho._id
                            return res.redirect('/produto/'.concat(produto.slug))
                        })
            })
    }

    return Carrinho
            .findById(req.session.carrinho_id)
            .then((carrinho) => {
                let exists = carrinho && carrinho.produtos && carrinho.produtos.filter(produto => produto['produto'] == req.body.produto_id ? true : false)

                if (!exists || !exists.length) {
                    carrinho && carrinho.produtos && carrinho.produtos.push({ produto: req.body.produto_id })
                    return carrinho
                            .save()
                            .then((saved) => {
                                return res.redirect('/produto/'.concat(req.body.produto_slug))
                            })
                }

                Carrinho
                    .findOneAndUpdate({
                        _id: carrinho._id,
                        'produtos.produto': req.body.produto_id
                    }, {
                        $set: {
                            'produtos.$.produto': req.body.produto_id,
                            'produtos.$.quantidade': exists && exists[0] && exists[0].quantidade + 1
                        }
                    }, {
                        safe: true,
                        upsert: true
                    })
                    .then((updated) => {
                        return res.redirect('/produto/'.concat(req.body.produto_slug))
                    })
            })
            .catch((error) => {
                console.log(error)
            })

}
