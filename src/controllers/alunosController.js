const Aluno = require('../database/models/alunos')

module.exports = {
	async listAll(req, res){
		const alunos = await Aluno.findAll()
		if (alunos == ""){
			return res.status(400).send("Não existe alunos cadastrados")
		}
		return res.status(200).json(alunos)
	},

	async create(req, res){
		const {nome, idade, telefone } = req.body

		if (nome == undefined || idade == undefined || telefone == undefined){
			return res.status(400).send("Digite os valores corretos")
		}
		if (nome == "" || idade == "" || telefone == ""){
			return res.status(400).send("Digite os valores corretos")
		}
		else{
			const alunos = await Aluno.create({
				nome,
				idade,
				telefone
			})
			return res.status(200).json(alunos)

		}
	},
	async update(req, res){
		
		const { telefone } = req.body
	
		const alunos = await Aluno.update(
			{telefone},
				{
					where: { id: req.params.id},
				}
		)
		if (alunos == 0){
			return res.status(400).send("aluno não encontrado")
		}
		return res.status(200).json({"msg":"aluno atualizado com sucesso"})
		
	},

	async delete(req, res){
			const id = req.params.id
		
			const alunos = await Aluno.destroy({
				where:{id:id}
			})
			if (alunos == 0){
			return res.status(400).send("aluno não encontrado")
		}
			return res.status(200).json({"msg":"aluno deletado com sucesso"})

	}	
}