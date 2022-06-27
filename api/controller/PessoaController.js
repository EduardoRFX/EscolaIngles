const database = require('../models/index.js')

class PessoaController {
    static async pegaTodasAsPessoas(req, res) {

        try{
            const pessoas = await database.Pessoas.findAll()
            return res.status(200).json(pessoas)
        
        }catch(err){
            return res.status(500).json({err:err})
        } 
    }

    static async pegaPessoa(req, res) {
        const { id } = req.params

        try{
            const pessoa = await database.Pessoas.findOne({ where : {id: Number(id)}})
            return res.status(200).json(pessoa)

        }catch(err){
            return res.status(500).json({err:err})
        } 
    }

    static async criarPessoa(req, res) {
        const novaPesssoa = req.body

        try{
            const novaPessoaCriada = await database.Pessoas.create(novaPesssoa)
            return res.status(200).json(novaPessoaCriada)
        
        }catch(err){
            return res.status(500).json({err:err})
        } 
    }

    static async atualizaPessoa(req, res) {
        const { id } = req.params
        const novaPessoa = req.body

        try{
            await database.Pessoas.update(novaPessoa, { where : {id: Number(id)} })
            const pessoaAtualizada = await database.Pessoas.findOne({ where: {id: Number(id)} })
            return res.status(200).json(pessoaAtualizada)

        }catch(err){
            return res.status(500).json({err:err})
        } 
    }

    static async apagarPessoa(req, res) {
        const { id } = req.params
        
        try{
            await database.Pessoas.destroy({ where: { id : Number(id) } })
            return res.status(200).json({message: 'ID apagado com sucesso!'})  

        }catch(err){
            return res.status(500).json({err:err})
        } 
    }

    //Matricula

    static async Matriculas(req, res) {
        try{
            const matriculas = await database.Matriculas.findAll()
            return res.status(200).json(matriculas)

        }catch(err){
            return res.status(500).json({err: err})
        }
        
    }

    static async pegaUmaMatricula(req, res) {
        const { estudanteID, matriculaID } = req.params

        try{
            const umaMatricula = await database.Matriculas.findOne({ 
                where: {
                    id: Number(matriculaID),
                     estudante_id: Number(estudanteID)} })

            return res.status(200).json(umaMatricula)

        }catch(err){
            return res.status(500).json({err: err})
        }

    }

    static async criarMatricula(req, res) {
        const { estudanteID } = req.params
        const novasInfos = {...req.body, estudante_id: Number(estudanteID)} //{...} =>Operador Spread

        try{
            const novaMatricula = await database.Matriculas.create(novasInfos)
            return res.status(200).json(novaMatricula)

        }catch(err){
            return res.status(500).json({err: err})
        }

    }

    static async attMatricula(req, res) {
        const { estudanteID, matriculaID } = req.params
        const novasInfos = req.body

        try{
            await database.Matriculas.update(novasInfos, {
                 where: {
                    id: Number(matriculaID),
                     estudante_id: Number(estudanteID)} })

        
            const matriculaAtt = await database.Matriculas.findOne({
                 where: {
                    id: Number(matriculaID)} })

            return res.status(200).json(matriculaAtt)                     

        }catch(err) {
            return res.status(500).json({err: err})
        }

    }

    static async apagarMatricula(req, res) {
        const { estudanteID, matriculaID } = req.params

        try{
            await database.Matriculas.destroy({ where: {id: Number(matriculaID)} })
            return res.status(200).json({message: 'Matricula deletada com sucesso!'})

        }catch(err) {
            return res.status(500).json({err: err})
        }
    }
}

module.exports = PessoaController