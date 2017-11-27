const Cliente = require('./../../schemas/cliente')

module.exports = (req, res) => {

    Cliente
        .find()
        .then((clientes) => {
            if (!clientes) {
                return res.redirect('/cliente')
            }

            return res.render('cliente/index', {
                title: 'Admin E-Smartmenu',
                layout: 'layouts/main',
                user: req.user || undefined,
                clientes
            })
        })
        .catch((error) => {
            return res.redirect('/cliente')
        })
}