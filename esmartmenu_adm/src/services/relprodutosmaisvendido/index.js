const Relprodutosmaisvendido = require('./../../schemas/carrinho')
const moment = require('moment')

module.exports = (req, res) => {
    let dt_ini = req.query.dt_ini && req.query.dt_ini.match(/^\d{4}\-\d{2}\-\d{2}/) ? new Date(req.query.dt_ini) : new Date(moment().subtract(60, 'days'));
    let dt_fim = req.query.dt_fim && req.query.dt_fim.match(/^\d{4}\-\d{2}\-\d{2}/) ? new Date(req.query.dt_fim) : new Date();

    let options = {
        'criado': {
            '$gte': dt_ini,
            '$lt': dt_fim
        }
    }

    Relprodutosmaisvendido
        .find(options)
        .populate({
            path: 'produtos.produto',
            model: 'Produto',
            populate: {
                path: 'categoria',
                model: 'Categoria'
            }
        })
        .then((carrinhos) => {
            if (!carrinhos) {
                return res.redirect('/relprodutosmaisvendido')
            }

            return res.render('relprodutosmaisvendido/index', {
                title: 'Admin E-Smartmenu',
                layout: 'layouts/main',
                user: req.user || undefined,
                carrinhos,
                moment: moment
            })
        })
        .catch((error) => {
            return res.redirect('/')
        })
}