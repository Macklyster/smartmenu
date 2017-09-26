module.exports = (req, res) => {
	return res.render('categoria/show', {
		title: 'Categoria SmartMenu',
		layout: 'layouts/main',
		user: req.user || undefined
	})
}
