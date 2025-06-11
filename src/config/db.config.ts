import dotenv from 'dotenv';
dotenv.config();

const jwtSecret = process.env.JWT;
// nếu Jwt bị lỗi (undifine hoặc null) thì dừng chương trình, hiển thị lỗi
// nếu jwt là null hoặc undefine thì chứa giá trị không hợp lệ -> rủi ro về bảo mật cao
if (!jwtSecret) {
  throw new Error("JWT secret is not defined in environment variables.");
}

export const config = {
  HOST: process.env.DATABASE_HOST,
  USER: process.env.DATABASE_USER,
  PASSWORD: process.env.DATABASE_PASS,
  DB: process.env.DATABASE_NAME,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  jwtSecret,
};

export const dialect = "mysql";