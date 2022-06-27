const database = require('../models/index.js')

class TurmaController {

    static async todosAsTurmas(req, res) {

        try{
            const turmas = await database.Turmas.findAll()
            return res.status(200).json(turmas)

        }catch(err){
            return res.status(500).json({err: err})
        }
    }

    static async umaTurma(req, res) {
        const { id } = req.params

        try{
            const turma = await database.Turmas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(turma)

        }catch(err){
            return res.status(500).json({err: err})
        }
    }

    static async criarTurma(req, res) {
        const infos = req.body

        try{
            const novaTurma = await database.Turmas.create(infos)
            return res.status(200).json(novaTurma)

        }catch(err){
            return res.status(500).json({err: err})
        }
    }

    static async attTurma(req, res) {
        const { id } = req.params
        const infos = req.body

        try{
            await database.Turmas.update(infos, { where : { id : Number(id) } })
            const novaTurma = await database.Turmas.findOne({ where: { id : Number(id) } })
            return res.status(200).json(novaTurma)


        }catch(err){
            return res.status(500).json({err: err})
        }
    }

    static async apagarTurma(req, res) {
        const { id } = req.params

        try{
            await database.Turmas.destroy({ where : { id : Number(id) } })
            return res.status(200).json({message : 'Turma apagada com sucesso!'})
        }catch(err){
            return res.status(500).json({err: err})
        }
    }

}

module.exports = TurmaController