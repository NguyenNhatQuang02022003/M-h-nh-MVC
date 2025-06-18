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
      // {
      //   username: 'khang',
      //   email: 'khang@gmail.com',
      //   password: '134',
      //   role: 'staff'
      // },
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
      // { username: 'minh', email: 'minh001@gmail.com', password: 'pass001', role: 'staff' },
      // { username: 'thu', email: 'thu002@gmail.com', password: 'pass002', role: 'staff' },
      // { username: 'nam', email: 'nam003@gmail.com', password: 'pass003', role: 'staff' },
      // { username: 'hoa', email: 'hoa004@gmail.com', password: 'pass004', role: 'staff' },
      // { username: 'trung', email: 'trung005@gmail.com', password: 'pass005', role: 'staff' },
      // { username: 'ha', email: 'ha006@gmail.com', password: 'pass006', role: 'staff' },
      // { username: 'kiet', email: 'kiet007@gmail.com', password: 'pass007', role: 'staff' },
      // { username: 'anh', email: 'anh008@gmail.com', password: 'pass008', role: 'staff' },
      // { username: 'phuong', email: 'phuong009@gmail.com', password: 'pass009', role: 'staff' },
      // { username: 'vinh', email: 'vinh010@gmail.com', password: 'pass010', role: 'staff' },
      // { username: 'lan', email: 'lan011@gmail.com', password: 'pass011', role: 'staff' },
      // { username: 'son', email: 'son012@gmail.com', password: 'pass012', role: 'staff' },
      // { username: 'thao', email: 'thao013@gmail.com', password: 'pass013', role: 'staff' },
      // { username: 'vu', email: 'vu014@gmail.com', password: 'pass014', role: 'staff' },
      // { username: 'nga', email: 'nga015@gmail.com', password: 'pass015', role: 'staff' },
      // { username: 'kien', email: 'kien016@gmail.com', password: 'pass016', role: 'staff' },
      // { username: 'quynh', email: 'quynh017@gmail.com', password: 'pass017', role: 'staff' },
      // { username: 'dung', email: 'dung018@gmail.com', password: 'pass018', role: 'staff' },
      // { username: 'tam', email: 'tam019@gmail.com', password: 'pass019', role: 'staff' },
      // { username: 'linh', email: 'linh020@gmail.com', password: 'pass020', role: 'staff' },
      // { username: 'thinh', email: 'thinh021@gmail.com', password: 'pass021', role: 'staff' },
      // { username: 'mai', email: 'mai022@gmail.com', password: 'pass022', role: 'staff' },
      // { username: 'bao', email: 'bao023@gmail.com', password: 'pass023', role: 'staff' },
      // { username: 'nhan', email: 'nhan024@gmail.com', password: 'pass024', role: 'staff' },
      // { username: 'hue', email: 'hue025@gmail.com', password: 'pass025', role: 'staff' },
      // { username: 'quoc', email: 'quoc026@gmail.com', password: 'pass026', role: 'staff' },
      // { username: 'thuong', email: 'thuong027@gmail.com', password: 'pass027', role: 'staff' },
      // { username: 'long', email: 'long028@gmail.com', password: 'pass028', role: 'staff' },
      // { username: 'tuan', email: 'tuan029@gmail.com', password: 'pass029', role: 'staff' },
      // { username: 'yen', email: 'yen030@gmail.com', password: 'pass030', role: 'staff' },
      // { username: 'thanh', email: 'thanh031@gmail.com', password: 'pass031', role: 'staff' },
      // { username: 'ngoc', email: 'ngoc032@gmail.com', password: 'pass032', role: 'staff' },
      // { username: 'giang', email: 'giang033@gmail.com', password: 'pass033', role: 'staff' },
      // { username: 'loc', email: 'loc034@gmail.com', password: 'pass034', role: 'staff' },
      // { username: 'dao', email: 'dao035@gmail.com', password: 'pass035', role: 'staff' },
      // { username: 'phuc', email: 'phuc036@gmail.com', password: 'pass036', role: 'staff' },
      // { username: 'hien', email: 'hien037@gmail.com', password: 'pass037', role: 'staff' },
      // { username: 'cam', email: 'cam038@gmail.com', password: 'pass038', role: 'staff' },
      // { username: 'khoa', email: 'khoa039@gmail.com', password: 'pass039', role: 'staff' },
      // { username: 'my', email: 'my040@gmail.com', password: 'pass040', role: 'staff' },
      // { username: 'trang', email: 'trang041@gmail.com', password: 'pass041', role: 'staff' },
      // { username: 'tai', email: 'tai042@gmail.com', password: 'pass042', role: 'staff' },
      // { username: 'truong', email: 'truong043@gmail.com', password: 'pass043', role: 'staff' },
      // { username: 'hanh', email: 'hanh044@gmail.com', password: 'pass044', role: 'staff' },
      // { username: 'tien', email: 'tien045@gmail.com', password: 'pass045', role: 'staff' }


    ]);
  },

  async down(queryInterface: QueryInterface): Promise<void> {
    await queryInterface.bulkDelete('user', {}, {});
  }
};
