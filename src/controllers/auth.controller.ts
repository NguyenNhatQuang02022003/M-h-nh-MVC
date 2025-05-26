import { Request, Response } from "express";
import UserRepository from "../repositories/auth.repository";
export default class UserController {
    async signup(req: Request, res: Response): Promise<void> {
        
        try {
            const { username, email, password, role } = req.body;
            const user = await UserRepository.signup( username, email, password, role); 
            res.status(201).json({
                message: "create OK",
                data: user
            });
        } catch (err) 
        {
            console.log(err)
            if (err instanceof Error && err.message === "Username or email already exists!") {
                res.status(400).json({ message: err.message });
            } 
            else 
            {
                res.status(500).json({ message: "Internal Server Error!" });
            }
        }
    }
}