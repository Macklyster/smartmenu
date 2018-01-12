const Categoria = require('./../../schemas/categoria')

module.exports = (req, res) => {

    req.body.enable = 'enable' in req.body ? true : false

    Categoria
        .findByIdAndUpdate(req.params.id, req.body)
        .then((categoria) => {
            return res.redirect('/categoria')
        })
        .catch((error) => {

        })
}