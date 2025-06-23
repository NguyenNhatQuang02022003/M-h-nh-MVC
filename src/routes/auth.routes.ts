import { Router, Request, Response, NextFunction } from "express";
import AuthController from "../controllers/auth.controller"
import { checkJwt } from "../middleware/auth.checkJWT";
class AuthRoutes {
    router = Router();
    controller = new AuthController();

    constructor() {
        this.intializeRoutes();
    }
    intializeRoutes() {
        // đăng ký người dùng
        /**
          * @swagger
          * /api/auth/signup:
          *   post:
          *     summary: Đăng ký người dùng mới
          *     tags: [Auth]
          *     requestBody:
          *       required: true
          *       content:
          *         application/json:
          *           schema:
          *             type: object
          *             required:
          *               - username
          *               - email
          *               - password
          *               - role
          *             properties:
          *               username:
          *                 type: string
          *                 example: johndoe
          *               email:
          *                 type: string
          *                 example: johndoe@example.com
          *               password:
          *                 type: string
          *                 example: yourPassword123
          *               role:
          *                 type: string
          *                 example: user
          *     responses:
          *       201:
          *         description: Đăng ký thành công
          *       400:
          *         description: Username or email already exists
          */
        this.router.post("/signup", this.wrapAsync(this.controller.signup.bind(this.controller)));
        // đăng nhập người dùng
        /**
         * @swagger
         * /api/auth/signin:
         *   post:
         *     summary: Đăng nhập người dùng
         *     tags: [Auth]
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             required:
         *               - username
         *               - password
         *             properties:
         *               username:
         *                 type: string
         *                 example: quang
         *               password:
         *                 type: string
         *                 example: 123
         *     responses:
         *       200:
         *         description: Đăng nhập thành công, trả về token
         *       400:
         *         description: Invalid username or password
         */
        this.router.post("/signin", this.wrapAsync(this.controller.signin.bind(this.controller)));
        

        /**
         * @swagger
         * /api/auth/change-password:
         *   post:
         *     summary: Đổi mật khẩu người dùng
         *     tags: [Auth]
         *     security:
         *       - bearerAuth: []
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             required:
         *               - oldPassword
         *               - newPassword
         *             properties:
         *               oldPassword:
         *                 type: string
         *                 example: currentPassword123
         *               newPassword:
         *                 type: string
         *                 example: newPassword456
         *     responses:
         *       200:
         *         description: Đổi mật khẩu thành công
         *       400:
         *         description: Thiếu dữ liệu hoặc sai mật khẩu cũ
         *       401:
         *         description: Không có quyền hoặc token không hợp lệ
         *       500:
         *         description: Lỗi server
         */
        this.router.post("/change-password", [checkJwt] ,this.wrapAsync(this.controller.changePassword.bind(this.controller)));
    }

    private wrapAsync(fn: (req: Request, res: Response, next?: NextFunction) => Promise<void | Response>) {
        return (req: Request, res: Response, next: NextFunction) => {
            Promise.resolve(fn(req, res, next)).catch(next);
        };
    }
}
export default new AuthRoutes().router;