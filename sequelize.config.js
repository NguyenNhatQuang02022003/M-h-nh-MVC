// cấu hình kết nối cơ sở dữ liệu cho Sequelize

require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
  }
};
