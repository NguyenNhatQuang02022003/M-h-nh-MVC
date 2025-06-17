'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user', [
      {
        username: 'nhat quang',
        email: 'quang@gmail.com',
        password: '123',
        role: 'admin',
        // createdAt: new Date(),
        // updatedAt: new Date()
      },
      {
    username: 'lan nguyen',
    email: 'lan@gmail.com',
    password: '123',
    role: 'staff',
    // createdAt: new Date(),
    // updatedAt: new Date()
  },
  {
    username: 'tuan le',
    email: 'tuan@gmail.com',
    password: '123',
    role: 'staff',
    // createdAt: new Date(),
    // updatedAt: new Date()
  },
  {
    username: 'hoang tran',
    email: 'hoang@gmail.com',
    password: '123',
    role: 'staff',
    // createdAt: new Date(),
    // updatedAt: new Date()
  }
      
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
  }
};
