module.exports = (app) => {
	app.use('/', require('./routes/main'))
	app.use('/categoria', require('./routes/categoria'))
	app.use('/produto', require('./routes/produto'))
	app.use('/usuario', require('./routes/usuario'))
	app.use('/auth', require('./routes/auth'))
}
