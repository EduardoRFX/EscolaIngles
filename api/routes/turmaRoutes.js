const express = require('express')
const TurmaController = require('../controller/TurmaController.js')

const router = express.Router()

router
    .get('/turmas', TurmaController.todosAsTurmas)
    .get('/turmas/:id', TurmaController.umaTurma)
    .post('/turmas', TurmaController.criarTurma)
    .put('/turmas/:id', TurmaController.attTurma)
    .delete('/turmas/:id', TurmaController.apagarTurma)

module.exports = router