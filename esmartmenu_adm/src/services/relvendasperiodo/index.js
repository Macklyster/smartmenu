const Relvendasperiodo = require('./../../schemas/carrinho')
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


        Relvendasperiodo
        //.find()
            .find(options)
            .populate('cliente')
            .populate('cliente.endereco')
            .then((carrinhos) => {
                if (!carrinhos) {
                    return res.redirect('/relvendasperiodo')
                }

                return res.render('relvendasperiodo/index', {
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
    /*module.exports = (req, res) => {
        const options = [{
            $match: {
                'criado': {
                    '$gte': new Date(moment().subtract(30, 'days')),
                    '$lt': new Date()
                        //req.body.preco_venda
                }
            }
        }, {
            $group: {
                _id: '$criado',
                count: { $sum: 1 }
            }
        }]

        Relvendasperiodo
            .find({ options })
            .populate('carrinho')
            .then((produtos) => {
                if (!produtos) {
                    return res.redirect('/relvendasperiodo')
                }

                return res.render('relvendasperiodo/index', {
                        title: 'Admin E-Smartmenu',
                        layout: 'layouts/main',
                        user: req.user || undefined,
                        produtos
                    })
                    .catch((error) => {
                        return res.redirect('/relvendasperiodo')
                    })

            })
    }*/