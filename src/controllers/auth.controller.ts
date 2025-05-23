import { Request, Response } from "express";
import User from "../models/auth.model";
import UserRepository from "../repositories/auth.repository";
export default class UserController {
    async signup(req: Request, res: Response): Promise<void> {
        
        try {
            const { username, email, password, role } = req.body;
            await UserRepository.signup( username, email, password, role); 
            res.status(201).json({
                message: "create OK",
                // data: user
            });
        } catch (err) {
            res.status(500).json({
                message: "Internal Server Error!"
            });
        }
    }
}