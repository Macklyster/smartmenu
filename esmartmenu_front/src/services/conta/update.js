const Cliente = require('./../../schemas/cliente')
const slugfy = require('./../../utils/slugfy')

module.exports = (req, res) => {
    let data_nasc = req.body.data_nasc.toString().split('/')
    let id = slugfy(req.body.cpf)
    let celular = slugfy(req.body.celular)
    let cep = slugfy(req.body.cep)
    let slug = slugfy(req.body.nome)

    let data = {
        id: id,
        nome: req.body.nome,
        slug: slug,
        data_nasc: {
            dia: data_nasc[0],
            mes: data_nasc[1],
            ano: data_nasc[2]
        },
        //contato: {
        email: req.body.email,
        celular: celular,
        //},
        endereco: {
            logradouro: req.body.logradouro,
            numero: req.body.numero_entrega,
            cidade: req.body.cidade,
            bairro: req.body.bairro,
            cep: cep
        }
    }

    Cliente
        .findById(req.params.id)
        .then((cliente) => {
            if (!cliente) {
                return res.redirect('/')
            }

            cliente.senha = req.body.senha

            cliente.setPassword(cliente.senha, (error, updated, passErr) => {
                if (error || passErr) {
                    return res.redirect('/')
                }

                updated.save()

                Cliente
                    .findByIdAndUpdate(req.params.id, data)
                    .then((updated) => {
                        return res.redirect('/conta/' + req.user.slug)
                    })
            })
        })
        .catch((error) => {
            return res.redirect('/conta/' + req.user.slug)
        })
}