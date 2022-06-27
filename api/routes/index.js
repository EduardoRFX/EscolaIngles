const express = require('express')
const bodyParser = require('express')
const pessoas = require('./pessoaRoutes.js')
const niveis = require('./nivelRoutes.js')
const turmas = require('./turmaRoutes.js')

module.exports = app => {
    app.use(
        bodyParser.json(),
        pessoas,
        niveis,
        turmas,

        )
}