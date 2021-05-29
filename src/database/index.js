const sequelize = require('sequelize')
const dbconfig = require('../config/database')
const alunos = require('./models/alunos')

const connection = new sequelize(dbconfig)

alunos.init(connection)

module.exports = connection;