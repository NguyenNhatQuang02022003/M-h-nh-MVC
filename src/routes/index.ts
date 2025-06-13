import homeRoutes from "./home.routes";
import tutorialRoutes from "./tutorial.routes";
import authRoutes from "./auth.routes";
import { Application, Request, Response } from 'express';
export default class Routes {
  constructor(app: Application) {
    app.use("/api", homeRoutes);
    app.use("/api/tutorials", tutorialRoutes);
    app.use("/api/auth", authRoutes);
    

    // /**
    //  * @swagger
    //  * /api/user:
    //  *   get:
    //  *     summary: Retrieve a list of users
    //  *     responses:
    //  *       200:
    //  *         description: A list of users
    //  *         content:
    //  *           application/json:
    //  *             schema:
    //  *               type: array
    //  *               items:
    //  *                 type: object
    //  *                 properties:
    //  *                   id:
    //  *                     type: integer
    //  *                     example: 1
    //  *                   name:
    //  *                     type: string
    //  *                     example: John Doe
    //  */

    // app.get('/api/user', (req: Request, res: Response) => {
    //   const users = [{ id: 1, name: 'John Doe' }];
    //   res.json(users);
    // });
  }

}

