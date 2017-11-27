const VendasPeriodo = require('./../../schemas/carrinho')
const moment = require('moment')

module.exports = (req, res) => {
	const options = [{
		$match: {
			'criado': {
				'$gte': new Date(moment().subtract(30, 'days')),
				'$lt': new Date()
			}
		}
	}, {
		$group: {
			_id: '$criado',
			count: { $sum: 1 }
		}
	}]

	VendasPeriodo
		.aggregate(options)
		.sort({ 'nome': 'desc' })
		.then((result) => {
			let labels = result.map(item => moment(item._id).format('DD/MM/YYYY'))
			let data = result.map(item => item.count)
			
			return res.json({ labels, datasets: [{ data }] })

			//return res.json(result)
		})

}