'use strict';

module.exports = {
  //npx sequelize-cli db:seed:all
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
  //npx sequelize-cli db:seed:undo	Rollback seed file cuối cùng vừa chạy.
  //npx sequelize-cli db:seed:undo:all	Xóa toàn bộ dữ liệu được tạo bởi tất cả seed files
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
  }
};
