const express = require('express')
const PessoaController = require('../controller/PessoaController.js')

const router = express.Router()

router
    .get('/pessoas', PessoaController.pegaTodasAsPessoas)
    .get('/pessoas/:id', PessoaController.pegaPessoa)
    .post('/pessoas', PessoaController.criarPessoa)
    .put('/pessoas/:id', PessoaController.atualizaPessoa)
    .delete('/pessoas/:id', PessoaController.apagarPessoa)
    //Matricula
    .get('/matriculas', PessoaController.Matriculas)
    .get('/pessoas/:estudanteID/matricula/:matriculaID', PessoaController.pegaUmaMatricula)
    .post('/pessoas/:estudanteID/matricula', PessoaController.criarMatricula)
    .put('/pessoas/:estudanteID/matricula/:matriculaID', PessoaController.attMatricula)
    .delete('/pessoas/:estudanteID/matricula/:matriculaID', PessoaController.apagarMatricula)


module.exports = router