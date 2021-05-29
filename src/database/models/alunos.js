const { Model, DataTypes } = require('sequelize')


class alunos extends Model{
  static init(sequelize){
    super.init({
      name: DataTypes.STRING,
      age: DataTypes.INTEGER(2)
    }, {
      sequelize
    })

    return this;
  }
}

module.exports = alunos;