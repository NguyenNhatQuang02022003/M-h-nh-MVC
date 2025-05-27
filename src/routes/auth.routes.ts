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
        this.router.post("/signup", this.wrapAsync(this.controller.signup.bind(this.controller)));
        // đăng nhập người dùng
        this.router.get("/signin", this.wrapAsync(this.controller.signin.bind(this.controller)));
    }
    private wrapAsync(fn: (req: Request, res: Response, next?: NextFunction) => Promise<void | Response>) {
    return (req: Request, res: Response, next: NextFunction) => {
      Promise.resolve(fn(req, res, next)).catch(next);
    };
    }
}
export default new AuthRoutes().router;