import { Router, Request, Response, NextFunction } from "express";
import TutorialController from "../controllers/tutorial.controller";
import { checkJwt } from "../middleware/auth.checkJWT";
import { checkRole } from "../middleware/auth.checkrole";

class TutorialRoutes {
  router = Router();
  controller = new TutorialController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // Create a new Tutorial
    /**
 * @swagger
 * /api/tutorials/:
 *   post:
 *     summary: Tạo mới tutorial
 *     tags: [Tutorials]
 *     description: Tạo mới một tutorial. Yêu cầu JWT và quyền admin.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Learn Node.js"
 *               description:
 *                 type: string
 *                 example: "A beginner tutorial"
 *               published:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Tạo thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: create OK
 *                 data:
 *                   $ref: '#/components/schemas/Tutorial'
 *       401:
 *         description: Unauthorized - thiếu hoặc sai token
 *       403:
 *         description: Forbidden - không có quyền admin
 *       500:
 *         description: Internal Server Error
 */
    this.router.post("/", [checkJwt, checkRole(["admin"])], this.wrapAsync(this.controller.create.bind(this.controller)));
    // Retrieve all Tutorials
    /**
     * @swagger
     * /api/tutorials/:
     *   get:
     *     summary: Lấy danh sách tất cả tutorials (phân trang)
     *     tags: [Tutorials]
     *     description: Trả về tất cả tutorials trong hệ thống với phân trang. Yêu cầu xác thực bằng JWT.
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: query
     *         name: offset
     *         schema:
     *           type: integer
     *           default: 0
     *         description: Số lượng bản ghi bỏ qua
     *       - in: query
     *         name: limit
     *         schema:
     *           type: integer
     *           default: 10
     *         description: Số lượng bản ghi trả về
     *     responses:
     *       200:
     *         description: Thành công
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   example: findAll OK
     *                 data:
     *                   type: array
     *                   items:
     *                     $ref: '#/components/schemas/Tutorial'
     *       401:
     *         description: Unauthorized
     *       500:
     *         description: Internal Server Error
     */
    this.router.get("/", [checkJwt], this.controller.findAll);
    // Retrieve a single Tutorial with id
    /**
     * @swagger
     * /api/tutorials/{id}:
     *   get:
     *     summary: Lấy một tutorial theo ID
     *     tags: [Tutorials]
     *     description: Trả về một tutorial theo ID. Yêu cầu xác thực JWT.
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID của tutorial cần tìm
     *     responses:
     *       200:
     *         description: Thành công
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   example: findOne OK
     *                 data:
     *                   $ref: '#/components/schemas/Tutorial'
     *       400:
     *         description: ID không hợp lệ
     *       401:
     *         description: Unauthorized - thiếu hoặc sai token
     *       404:
     *         description: Không tìm thấy tutorial
     *       500:
     *         description: Lỗi server nội bộ
     */
    this.router.get("/:id", [checkJwt], this.wrapAsync(this.controller.findOne.bind(this.controller)));
    // Update a Tutorial with id
    /**
 * @swagger
 * /api/tutorials/{id}:
 *   put:
 *     summary: Cập nhật một tutorial theo ID
 *     tags: [Tutorials]
 *     description: Cập nhật một tutorial. Yêu cầu JWT và quyền admin.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID của tutorial cần cập nhật
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Updated Title
 *               description:
 *                 type: string
 *                 example: Updated Description
 *               published:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: update OK
 *                 data:
 *                   $ref: '#/components/schemas/Tutorial'
 *       400:
 *         description: ID không hợp lệ
 *       401:
 *         description: Unauthorized - Thiếu hoặc sai token
 *       403:
 *         description: Forbidden - Không có quyền admin
 *       404:
 *         description: Không tìm thấy tutorial
 *       500:
 *         description: Lỗi server nội bộ
 */
    this.router.put("/:id", [checkJwt, checkRole(["admin"])], this.wrapAsync(this.controller.update.bind(this.controller)));
    // Delete a Tutorial with id
    /**
 * @swagger
 * /api/tutorials/{id}:
 *   delete:
 *     summary: Xóa một tutorial theo ID
 *     tags: [Tutorials]
 *     description: Xóa một tutorial theo ID. Yêu cầu xác thực JWT và quyền admin.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID của tutorial cần xóa
 *     responses:
 *       200:
 *         description: Xóa thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: delete OK
 *       400:
 *         description: ID không hợp lệ
 *       401:
 *         description: Unauthorized - Thiếu hoặc sai token
 *       403:
 *         description: Forbidden - Không có quyền admin
 *       404:
 *         description: Không tìm thấy tutorial
 *       500:
 *         description: Lỗi server nội bộ
 */
    this.router.delete("/:id", [checkJwt, checkRole(["admin"])], this.wrapAsync(this.controller.delete.bind(this.controller)));
  }


  private wrapAsync(fn: (req: Request, res: Response, next?: NextFunction) => Promise<void | Response>) {
    return (req: Request, res: Response, next: NextFunction) => {
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  }
}

export default new TutorialRoutes().router;