import { QueryInterface } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface): Promise<void> {
    await queryInterface.bulkInsert('user', [
      // {
      //   username: 'nhat quang',
      //   email: 'quang@gmail.com',
      //   password: '123',
      //   role: 'admin'
      // },
      {
        username: 'khang',
        email: 'khang@gmail.com',
        password: '134',
        role: 'staff'
      },
      // {
      //   username: 'tuan le',
      //   email: 'tuan@gmail.com',
      //   password: '123',
      //   role: 'staff'
      // },
      // {
      //   username: 'hoang tran',
      //   email: 'hoang@gmail.com',
      //   password: '123',
      //   role: 'staff'
      // }
    ]);
  },

  async down(queryInterface: QueryInterface): Promise<void> {
    await queryInterface.bulkDelete('user', {}, {});
  }
};
