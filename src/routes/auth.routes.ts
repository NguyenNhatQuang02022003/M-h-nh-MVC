import { Router, Request, Response, NextFunction } from "express";
import AuthController from "../controllers/auth.controller"

class AuthRoutes {
    router = Router();
    controller = new AuthController();

    constructor() {
        this.intializeRoutes();
    }
    intializeRoutes() {
        // đăng ký người dùng
        this.router.post("/signup", this.controller.signup);
    }

}
export default new AuthRoutes().router;