module.exports = (req, res) => {
	return res.render('pedido/acabado', {
		title: 'Obrigado SmartMenu',
		layout: 'layouts/main',
		user: req.user || undefined,
	})
}
