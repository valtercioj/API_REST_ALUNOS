const { Model, DataTypes } = require('sequelize')


class alunos extends Model{
  static init(sequelize){
    super.init({
      node: DataTypes.STRING,
      idade: DataTypes.INTEGER(2),
      telefone: DataTypes.STRING
    }, {
      sequelize
    })

    return this;
  }
}

module.exports = alunos;