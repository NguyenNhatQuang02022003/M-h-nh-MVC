
import User from "../models/auth.model";
import { Op } from "sequelize";

interface IUserRepository {
    signup(username: string, email: string, password: string, role: string): Promise<User>;
}

class userRepository implements IUserRepository {
    async signup(username: string, email: string, password: string, role: string): Promise<User> {
        try {
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
export default new userRepository();