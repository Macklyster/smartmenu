const Produto = require('./../../schemas/produto')

module.exports = (req, res) => {
    Produto
        .find({})
        .populate('categoria')
        .then((produtos) => {
            if (!produtos) {
                return res.redirect('/produto')
            }

            return res.render('produto/index', {
                title: 'Admin E-Smartmenu - Produtos',
                layout: 'layouts/main',
                user: req.user || undefined,
                produtos
            })
        })
        .catch((error) => {
            return res.redirect('/produto')
        })
}