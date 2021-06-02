'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('disciplinas', {
      
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      aluno_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'alunos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      disciplinas: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      nota1:{
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      nota2:{
        type: Sequelize.FLOAT,
        allowNull: false,
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
    return await queryInterface.dropTable('disciplinas');
    
  }
};
