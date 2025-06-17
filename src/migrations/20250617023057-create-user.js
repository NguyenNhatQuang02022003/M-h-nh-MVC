'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //npx sequelize-cli db:migrate
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }, 
      username: {
        type: Sequelize.STRING(255)
      },
      email: {
        type: Sequelize.STRING(255)
      },
      password: {
        type: Sequelize.STRING(255)
      },
      role: {
        type: Sequelize.STRING(255)
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user'); 
  }
  //npx sequelize-cli db:migrate:undo    // rollback bảng gần nhất
  //npx sequelize-cli db:migrate:undo:all   // rollback tất cả các bảng 


};
