const Cliente = require('./../../schemas/cliente')

module.exports = (req, res) => {
    Cliente
        .findOne({
            slug: req.params.slug
        })
        .then((cliente) => {
            if (!cliente) {
                return res.redirect('/')
            }

            cliente = cliente.toObject()

            cliente.data_nasc = cliente.data_nasc.dia + '/' + cliente.data_nasc.mes + '/' + cliente.data_nasc.ano
            return res.render('conta/minha-conta', {
                title: 'Minha Conta SmartMenu',
                cliente: cliente,
                layout: 'layouts/main',
                user: req.user || undefined
            })
        })
        .catch((error) => {
            return ''
        })
}