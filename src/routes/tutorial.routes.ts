import { Router, Request, Response, NextFunction } from "express";
import TutorialController from "../controllers/tutorial.controller";

class TutorialRoutes {
  router = Router();
  controller = new TutorialController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // Create a new Tutorial
    this.router.post("/", this.wrapAsync(this.controller.create.bind(this.controller)));

    // Retrieve all Tutorials
    this.router.get("/", this.controller.findAll);

    // Retrieve a single Tutorial with id
    this.router.get("/:id", this.wrapAsync(this.controller.findOne.bind(this.controller)));

    // Update a Tutorial with id
    this.router.put("/:id", this.wrapAsync(this.controller.update.bind(this.controller)));

    // Delete a Tutorial with id
    this.router.delete("/:id", this.wrapAsync(this.controller.delete.bind(this.controller)));
  }

  private wrapAsync(fn: (req: Request, res: Response, next?: NextFunction) => Promise<void | Response>) {
    return (req: Request, res: Response, next: NextFunction) => {
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  }
}

export default new TutorialRoutes().router;