const express = require('express')
const routes = express.Router();
const alunosController = require('./controllers/alunosController')


routes.get('/alunos', alunosController.listAll)
routes.post('/cadastro/alunos', alunosController.create)

routes.put('/alunos/atualizacao/:id', alunosController.update)
routes.delete('/alunos/deletar/:id', alunosController.delete)
module.exports = routes;