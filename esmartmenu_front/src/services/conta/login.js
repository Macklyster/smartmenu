const Cliente = require('./../../schemas/cliente')

module.exports = (req, res) => {
    Cliente.authenticate()(req.body.email, req.body.senha, (error, user, opts) => {
        if (error || user == false) {
            return res.redirect('/conta')
        }

        return req.login(user, (error) => {
            if (error) {
                return res.redirect('/conta')
            }

            return res.redirect('/')
        })
    })
}