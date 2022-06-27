const express = require('express')
const routes = require('./routes/index.js')

const app = express()
const port = 3030;


routes(app)

app.get('/', (req,res) =>{
    res.status(200).json({message: "Bem-vindo ao sistema da escola de inglês"})
})

app.listen(port, () =>{
    console.log('Servidor Conectado!')
})

module.exports = app