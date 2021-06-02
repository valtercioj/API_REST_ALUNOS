const { Model, DataTypes } = require('sequelize')

class disciplinas extends Model{
	static init(sequelize){
		super.init({
			disciplinas: DataTypes.STRING,
			nota1: DataTypes.FLOAT,
			nota2: DataTypes.FLOAT,
		},{sequelize})
	}
	static associate(models) {
    	this.belongsTo(models.alunos, { foreignKey: 'alunos_id', as: 'aluno' });
  }
}
module.exports = Disciplinas;