import User from "../models/auth.model";
import { Op } from "sequelize";

interface IUserRepository {
    signup(username: string, email: string, password: string, role: string): Promise<User>;
}

class UserRepository implements IUserRepository {
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
            // tạo user mới
            return await User.create({
                username: username,
                email: email,
                password: password,
                role: role,
            });
        } catch (err) {
            throw new Error("Failed to create Tutorial!");
        }
    }
}
export default new UserRepository();