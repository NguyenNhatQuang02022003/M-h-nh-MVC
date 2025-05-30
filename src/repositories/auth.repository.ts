import User from "../models/auth.model";
import { and, Op } from "sequelize";
import bcrypt from 'bcrypt';
import { config } from "../config/db.config";
import { UserResponse } from "../interfaces/user.response";
import * as jwt from "jsonwebtoken";
import { checkJwt } from "../middleware/auth.checkJWT";

interface IUserRepository {
    signup(username: string, email: string, password: string, role: string): Promise<User>;
    signin(username: string, password: string): Promise<UserResponse>;
}

class UserRepository implements IUserRepository {
    async signin(username: string, password: string): Promise<UserResponse> {
        try {
            // Tìm user theo username
            const user = await User.findOne({ where: { username } });

            if (!user) {
                throw new Error("Account does not exist");
            }

            // So sánh mật khẩu người dùng nhập với mật khẩu đã mã hóa trong DB
            const isMatch = await bcrypt.compare(password, user.password as string);
            if (!isMatch) {
                throw new Error("Invalid username or password!");
            }

            // Tạo token
            const token = jwt.sign(
                {
                    userId: user.id,
                    username: user.username,
                    role: user.role
                },
                config.jwtSecret,
                {
                    expiresIn: "5h"
                }
            );

            // Trả về user và token
            return {
                user: {
                    id: user.id as number,
                    username: user.username!,
                    email: user.email!,
                    role: user.role!
                },
                token
            };

        } catch (err) {
            if (err instanceof Error) {
                throw err;
            }
            throw new Error("Failed to sign in!");
        }
    }


    async signup(username: string, email: string, password: string, role: string): Promise<User> {
        // Kiểm tra trùng username or email
        const user = await User.findOne({
            where: {
                [Op.or]: [
                    { username: username },
                    { email: email }
                ]
            }
        });
        console.log(user)
        if (user) {
            throw new Error("Username or email already exists!");
        }
        try {
            //thêm hash và bcrypt để bảo mật mật khẩu
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            // tạo user mới
            return await User.create({
                username: username,
                email: email,
                password: hashedPassword, // thêm phần hashedPassword để bảo mật
                role: role,
            });
        } catch (err) {
            throw new Error("Failed to create Tutorial!");
        }
    }

}
export default new UserRepository();