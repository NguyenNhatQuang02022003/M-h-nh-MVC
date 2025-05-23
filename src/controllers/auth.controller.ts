import { Request, Response } from "express";
import user from "../models/auth.model";
import authRepository from "../repositories/auth.repository";
export default class userController{
    async signup(req: Request, res: Response) {
        
        console.log(req.body);
        const {username, email, password, role} = req.body

        try {
          const user = await authRepository.signup( username, email, password, role); 
        
          res.status(201).json({
            message: "create OK",
            data: "tesst"
          });
        } catch (err) {
          res.status(500).json({
            message: "Internal Server Error!"
          });
        }
      }
}