'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     return await queryInterface.createTable('alunos', 
      {
        id:{
          type: Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true,
          allowNull: false,
        },
        nome:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        idade:{
          type: Sequelize.INTEGER(2),
          allowNull: false,
        },
        telefone:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        created_at:{
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull: false,
        }
      });
     
  },

  down: async (queryInterface, Sequelize) => {

     return await queryInterface.dropTable('alunos');
     
  }
};
