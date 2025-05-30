export const config = {
  HOST: "127.0.0.1",
  USER: "root",
  PASSWORD: "123456",
  DB: "testdb",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // Thêm khóa bí mật JWT
  jwtSecret: "your-very-secret-key"  // Bạn nên dùng biến môi trường thay vì viết cứng
};

export const dialect = "mysql";
