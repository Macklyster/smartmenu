const express = require('express')
const path = require('path')

const app = express()
const env = process.env.NODE_ENV || 'development'
const envDir = path.join(__dirname, `./src/configs/env/${env}`)

require(envDir)(app)
require('./src/views/helpers')(app)
require('./src/index')(app)

app.listen(app.get('port'), () => {
	console.log('O servidor Express foi iniciado')
})