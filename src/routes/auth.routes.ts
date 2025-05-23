import { Router, Request, Response, NextFunction } from "express";
import authController from "../controllers/auth.controller"

class authRoutes {
    router = Router();
    controller = new authController();

    constructor() {
        this.intializeRoutes();
    }
    intializeRoutes() {
        // đăng ký người dùng
        this.router.post("/signup", this.wrapAsync(this.controller.signup.bind(this.controller)));
    }
    private wrapAsync(fn: (req: Request, res: Response, next?: NextFunction) => Promise<void | Response>) {
        return (req: Request, res: Response, next: NextFunction) => {
            Promise.resolve(fn(req, res, next)).catch(next);
        };
    }
}
export default new authRoutes().router;