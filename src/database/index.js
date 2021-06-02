const sequelize = require('sequelize')
const dbconfig = require('../config/database')
const alunos = require('./models/alunos')
const disciplinas = require('./models/disciplinas')

const connection = new sequelize(dbconfig)

alunos.init(connection)

disciplinas.init(connection)

disciplinas.associate(connection.models)

module.exports = connection;