const express = require('express')
const app = express()
const router = express('./routers')

require('./database')

app.use(express.json())
ap.use(router)

app.listen(3000, ()=>{
	console.log('Servidor rodando na porta 3000')
})