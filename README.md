# Node restful
API restful NodeJS para cadastro de alunos e matérias, com expressJS e Mysql.

## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)

## 🔥 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta `cd API_REST_ALUNOS`;
3. Rode `yarn` para instalar as dependências;
4. Altere as credencias dentro de `/src/config/database.js`;
5. Rode `yarn sequelize db:create` para criar o banco de dados;
6. Rode `yarn sequelize db:migrate` para executar as migrations;

## Routes

*+Alunos+*

 Router => /alunos | METHOD  => GET | DESCRIPTION => vizualização dos dados dos alunos

 Router => /cadastro/alunos | METHOD  => POST | DESCRIPTION => Cadastro de alunos 

 Router => /alunos/atualizacao/:id | METHOD  => PUT | DESCRIPTION => Atualização do telefone de um aluno a partir de seu id 

 Router => /alunos/deletar/:id | METHOD  => DELETE | DESCRIPTION => Deletando um aluno a partir de seu id

 ----------------------------------------------------------------------------------------------------------------------------------------------------
 
*+Disciplinas+*

 Router => /disciplinas/:aluno_id | METHOD  => GET | DESCRIPTION => Vizualização das disciplinas a partir do id do aluno

 Router => /disciplinas/cadastro/:aluno_id | METHOD  => POST | DESCRIPTION => Criação da disciplina e das notas a partir do id do aluno
	
## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.


## Author

* **Valtercio Santiago Ferreira Junior** - [GitHub](https://github.com/valtercioj) - Email: juniorvaltercio2015@gmail.com
