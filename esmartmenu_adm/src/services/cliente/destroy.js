const Cliente = require('./../../schemas/cliente')

module.exports = (req, res) => {

    Cliente
        .findByIdAndRemove(req.params.id)
        .then((cliente) => {
            return res.redirect('/cliente')
        })
        .catch((error) => {

        })
}