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
            const user = await User.findOne({ where: { username } });

            if (!user) {
                throw new Error("Account does not exist");
            }

            const isMatch = await bcrypt.compare(password, user.password as string);
            if (!isMatch) {
                throw new Error("Invalid username or password!");
            }

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
        const user = await User.findOne({
            where: {
                [Op.or]: [
                    { username: username },
                    { email: email }
                ]
            }
        });

        if (user) {
            throw new Error("Username or email already exists!");
        }

        try {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            return await User.create({
                username: username,
                email: email,
                password: hashedPassword,
                role: role,
            });
        } catch (err) {
            throw new Error("Failed to create Tutorial!");
        }
    }

    async changePassword(userId: number, oldPassword: string, newPassword: string): Promise<boolean> {
        try {
            const user = await User.findByPk(userId);

            if (!user) {
                throw new Error("User not found!");
            }

            const isMatch = await bcrypt.compare(oldPassword, user.password as string);

            if (!isMatch) {
                throw new Error("Old password is incorrect!");
            }

            const hashedPassword = await bcrypt.hash(newPassword, 10);

            const [affectedRows] = await User.update(
                { password: hashedPassword },
                { where: { id: userId } }
            );

            return affectedRows > 0;

        } catch (error) {
            console.error("Change password error:", error);
            throw new Error("Failed to change password!");
        }
    }
}

export default new UserRepository();
