const Produto = require('./../../schemas/produto')
const Banner = require('./../../schemas/banner')

module.exports = (req, res) => {
    Produto
        .find({
            enable: true
        })
        .then((produtos) => {

            return res.render('main/index', {
                title: 'Loja SmartMenu',
                layout: 'layouts/base',
                user: req.user || undefined,
                produtos
            })
        })
        .catch((error) => {

        })

}