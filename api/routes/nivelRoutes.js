const express = require('express')
const NivelController = require('../controller/NivelController.js')

const router = express.Router()

router 
    .get('/niveis', NivelController.todosOsNiveis)
    .get('/niveis/:id', NivelController.umNivel)
    .post('/niveis', NivelController.criarNivel)
    .put('/niveis/:id', NivelController.attNivel)
    .delete('/niveis/:id', NivelController.apagarNivel)


module.exports = router