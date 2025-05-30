import { Request, Response } from "express";
import UserRepository from "../repositories/auth.repository";
import authRepository from "../repositories/auth.repository";

export default class UserController {

    async signin(req: Request, res: Response): Promise<void> {

        try {

            const { username, password } = req.body;

            // gọi signin ở repository kiểm tra username và password 

            const user = await authRepository.signin(username, password);
            res.status(200).json({
                message: "sign in is ok",
                data: user
            });
        } catch (error) {
            if (error instanceof Error && (error.message.includes("Invalid") || error.message.includes("Account"))) {
                res.status(401).json({
                    message: error.message
                });
            } else {
                res.status(500).json({
                    message: "Internal Server Error!"
                });
            }
        }
    }

    async signup(req: Request, res: Response): Promise<void> {

        try {
            const { username, email, password, role } = req.body;
            const user = await UserRepository.signup(username, email, password, role);
            res.status(201).json({
                message: "create OK",
                data: user
            });
        } catch (err) {
            if (err instanceof Error && err.message === "Username or email already exists!") {
                res.status(400).json({ message: err.message });
            }
            else {
                res.status(500).json({ message: "Internal Server Error!" });
            }
        }
    }
}