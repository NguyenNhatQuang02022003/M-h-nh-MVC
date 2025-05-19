"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tutorial_controller_1 = __importDefault(require("../controllers/tutorial.controller"));
class TutorialRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new tutorial_controller_1.default();
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
    wrapAsync(fn) {
        return (req, res, next) => {
            Promise.resolve(fn(req, res, next)).catch(next);
        };
    }
}
exports.default = new TutorialRoutes().router;
