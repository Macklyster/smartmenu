const Usuario = require('./../../schemas/usuario')

module.exports = (req, res) => {
    let usuario = new Usuario()

    return res.render('usuario/new', {
        title: 'Admin E-Smartmenu - Usuário',
        layout: 'layouts/main',
        usuario: req.usuario || undefined,
        data: usuario
    })
}