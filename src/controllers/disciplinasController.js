const Disciplina = require('../database/models/disciplinas')
const Aluno = require('../database/models/alunos')

module.exports = {
	async index(req, res){
		const { aluno_id } = req.params;
		const disciplinas = await Disciplina.findAll({where:{aluno_id}})
		if (disciplinas == ""){
			return res.status(400).json({"msg":"aluno não encontrado"})
		}
		res.json(disciplinas)
	},

	async store(req, res){
		const { aluno_id } = req.params;
		const { disciplinas, nota1, nota2 } = req.body;

		const alunos = await Aluno.findByPk(aluno_id);
		if (!alunos){
			return res.status(400).json({"msg":"aluno não encontrado"})
		}
		const cadastro = await Disciplina.create({
			disciplinas,
			nota1,
			nota2,
			aluno_id,
		})
		return res.json(cadastro)
	}
}