const Produto = require('./../../schemas/produto')

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
                produtos,
                banners
            })
        })
        .catch((error) => {

        })
}