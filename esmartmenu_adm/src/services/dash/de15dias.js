const Produto = require('./../../schemas/produto')
const moment = require('moment')

module.exports = (req, res) => {
    const options = [{
        $group: {
            _id: '$criado',
            count: { $sum: 1 }
        }
    }]
    
    Produto
        .aggregate(options)
        .sort({'nome': 'desc'})
        .then((result) => {
            let labels = result.map(item => moment(item._id)).format('DD/MM/YYYY')
            let data   = result.map(item => item.count)
            return res.json({ labels, datasets: [{ data }] })
        })




	/*Cliente
		.find({})
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
		})*/
}
