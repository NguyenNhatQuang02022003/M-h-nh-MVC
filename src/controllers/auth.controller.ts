import { Request, Response } from "express";
import UserRepository from "../repositories/auth.repository";
import authRepository from "../repositories/auth.repository";

export default class UserController {

    async signin(req: Request, res: Response): Promise<void> {

        try {

            const { username, password } = req.body;

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
    async changePassword(req: Request, res: Response): Promise<void> {
        try {
            const userId = res.locals.user.id; 
            const { oldPassword, newPassword } = req.body;

            
            if (!oldPassword || !newPassword) {
                res.status(400).json({ message: "Old and new password are required." });
                return;
            }

            const success = await authRepository.changePassword(userId, oldPassword, newPassword);

            if (!success) {
                res.status(400).json({ message: "Change password failed." });
                return;
            }

            res.status(200).json({
                message: "Password changed successfully."
            });

        } catch (error) {
            if (error instanceof Error && error.message.includes("incorrect")) {
                res.status(401).json({ message: error.message });
            } else if (error instanceof Error && error.message.includes("not found")) {
                res.status(404).json({ message: error.message });
            } else {
                res.status(500).json({ message: "Internal Server Error!" });
            }

        }
    }
}