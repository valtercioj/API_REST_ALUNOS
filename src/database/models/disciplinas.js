const { Model, DataTypes } = require('sequelize')

class disciplinas extends Model{
	static init(sequelize){
		super.init({
			disciplina: DataTypes.STRING,
			nota1: DataTypes.FLOAT,
			nota2: DataTypes.FLOAT,
		},{sequelize})
	}
	static associate(models) {
    	this.belongsTo(models.alunos, { foreignKey: 'aluno_id', as: 'aluno' });
  }
}
module.exports = disciplinas;