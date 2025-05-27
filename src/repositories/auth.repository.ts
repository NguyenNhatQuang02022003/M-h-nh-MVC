import User from "../models/auth.model";
import { and, Op } from "sequelize";
import bcrypt from 'bcrypt';

interface IUserRepository {
    signup(username: string, email: string, password: string, role: string): Promise<User>;
    signin(username: string, password: string): Promise<User>;
}

class UserRepository implements IUserRepository {
    async signin(username: string, password: string): Promise<User> {
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
        console.log(password)
        // Đăng nhập thành công, trả về user
        return user;

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