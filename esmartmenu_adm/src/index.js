module.exports = (app) => {
    app.use('/', require('./routes/main'))
    app.use('/banner', require('./routes/banner'))
    app.use('/dashvendasperiodo', require('./routes/dashvendasperiodo'))
    app.use('/cliente', require('./routes/cliente'))
    app.use('/categoria', require('./routes/categoria'))
    app.use('/produto', require('./routes/produto'))
    app.use('/usuario', require('./routes/usuario'))
    app.use('/auth', require('./routes/auth'))
    app.use('/relcliente', require('./routes/relcliente'))
    app.use('/relprodutosmaisvendido', require('./routes/relprodutosmaisvendido'))
    app.use('/relvendasperiodo', require('./routes/relvendasperiodo'))
}