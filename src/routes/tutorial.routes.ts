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
    this.router.post("/",[checkJwt, checkRole(["admin"])], this.wrapAsync(this.controller.create.bind(this.controller)));

    // Retrieve all Tutorials
    this.router.get("/",[checkJwt], this.controller.findAll);

    // Retrieve a single Tutorial with id
    this.router.get("/:id",[checkJwt, checkRole(["admin"])], this.wrapAsync(this.controller.findOne.bind(this.controller)));

    // Update a Tutorial with id
    this.router.put("/:id",[checkJwt, checkRole(["admin"])], this.wrapAsync(this.controller.update.bind(this.controller)));

    // Delete a Tutorial with id
    this.router.delete("/:id",[checkJwt, checkRole(["admin"])], this.wrapAsync(this.controller.delete.bind(this.controller)));
  }

  private wrapAsync(fn: (req: Request, res: Response, next?: NextFunction) => Promise<void | Response>) {
    return (req: Request, res: Response, next: NextFunction) => {
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  }
}

export default new TutorialRoutes().router;