module.exports = (app) => {
    app.use('/', require('./routes/main'))
    app.use('/conta', require('./routes/conta'))
    app.use('/categoria', require('./routes/categoria'))
    app.use('/produto', require('./routes/produto'))
    app.use('/carrinho', require('./routes/carrinho'))
	app.use('/pedido', require('./routes/pedido'))
}
