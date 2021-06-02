const express = require('express')
const routes = express.Router();
const alunosController = require('./controllers/alunosController')
const disciplinasController = require('./controllers/disciplinasController')

routes.get('/alunos', alunosController.listAll)
routes.post('/cadastro/alunos', alunosController.create)

routes.put('/alunos/atualizacao/:id', alunosController.update)
routes.delete('/alunos/deletar/:id', alunosController.delete)

routes.get('/disciplinas/:aluno_id', disciplinasController.index)
routes.post('/disciplinas/cadastro/:aluno_id', disciplinasController.store)

module.exports = routes;