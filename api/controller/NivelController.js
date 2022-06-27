const database = require('../models/index.js')

class NivelController{

    static async todosOsNiveis(req, res) {

        try{
            const niveis = await database.Niveis.findAll()
            return res.status(200).json(niveis)

        }catch(err){
            return res.status(500).json({err:err})
        }
    }

    static async umNivel(req, res) {
        const { id } = req.params

        try{
            const nivel = await database.Niveis.findOne({ where: {id: Number(id) } })
            return res.status(200).json(nivel)

        }catch(err){
            return res.status(500).json({err:err})
        }
    }

    static async criarNivel(req, res) {
        const novoNivel = req.body

        try{
            const novoNivelCriado = await database.Niveis.create(novoNivel)
            return res.status(200).json(novoNivel)

        }catch(err){
            return res.status(500).json({err:err})
        }
    }

    static async attNivel(req, res) {
        const { id } = req.params
        const novoNivel = req.body
        
        try{
            await database.Niveis.update(novoNivel, { where: {id: Number(id) } })
            const novoNivelAtt = await database.Niveis.findOne({ where: {id: Number(id) } })
            return res.status(200).json(novoNivelAtt)

        }catch(err){
            return res.status(500).json({err:err})
        }
    }

    static async apagarNivel(req, res) {
        const { id } = req.params

        try{
            await database.Niveis.destroy({ where: {id: Number(id)} })
            return res.status(200).json({message: "Nivel apadado com sucesso!"})

        }catch(err){
            return res.status(500).json({err:err})
        }
    }

}

module.exports = NivelController