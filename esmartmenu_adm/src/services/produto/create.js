const Produto = require('./../../schemas/produto')
const slugfy = require('./../../utils/slugfy')

module.exports = (req, res) => {
    let slug = slugfy(req.body.nome)
    let preco_vendav = slugfy(req.body.preco_venda)

    req.body.slug = slug
    req.body.preco_venda = preco_vendav

    if (req.body.preco_venda > 0) {
        //if (req.body.desconto > 0) {
            let preco_real = req.body.preco_venda
            let preco_venda = req.body.preco_venda

            req.body.preco_venda = preco_venda
            req.body.preco_real = preco_real
        } else {
            req.body.preco_venda = req.body.preco_venda
            req.body.preco_real = req.body.preco_venda
        }

        req.body.image = ''

        if (req.files && req.files.length) {
            req.body.image = req.files && req.files[0] && req.files[0].location
        }

        Produto
            .create(req.body)
            .then((produto) => {
                //console.log(produto)
                return res.redirect('/produto')
            })
            .catch((error) => {
                console.log('Verifique os dados')
            })
    
}