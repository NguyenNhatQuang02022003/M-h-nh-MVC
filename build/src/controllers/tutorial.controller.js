"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tutorial_repository_1 = __importDefault(require("../repositories/tutorial.repository"));
class TutorialController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // định nghĩa request là gì và response 
            // sau đó sử dụng từ logic model
            const { title, description, published } = req.body;
            try {
                const tutorial = yield tutorial_repository_1.default.save(title, description, published);
                res.status(201).json({
                    message: "create OK",
                    data: tutorial
                });
            }
            catch (err) {
                res.status(500).json({
                    message: "Internal Server Error!"
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const { title, description, published } = req.body;
                // 1. Tìm tutorial theo ID
                const existingTutorial = yield tutorial_repository_1.default.retrieveById(Number(id));
                if (!existingTutorial) {
                    return res.status(404).json({
                        message: "Tutorial not found"
                    });
                }
                // 2. Cập nhật các trường (nếu có giá trị mới)
                existingTutorial.title = title !== null && title !== void 0 ? title : existingTutorial.title;
                existingTutorial.description = description !== null && description !== void 0 ? description : existingTutorial.description;
                existingTutorial.published = published !== null && published !== void 0 ? published : existingTutorial.published;
                // 3. Lưu thay đổi vào DB
                yield tutorial_repository_1.default.update(existingTutorial);
                // 4. Trả kết quả
                res.status(200).json({
                    message: "update OK",
                    data: existingTutorial,
                });
            }
            catch (err) {
                res.status(500).json({
                    message: "Internal Server Error!"
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tutorials = yield tutorial_repository_1.default.retrieveAll();
                res.status(200).json({
                    message: "findAll OK",
                    data: tutorials
                });
            }
            catch (err) {
                res.status(500).json({
                    message: "Internal Server Error!"
                });
            }
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tutorialId = parseInt(req.params.id, 10);
                if (isNaN(tutorialId)) {
                    return res.status(400).json({ message: "Invalid tutorial ID" });
                }
                const tutorial = yield tutorial_repository_1.default.retrieveById(tutorialId);
                if (!tutorial) {
                    return res.status(404).json({ message: "Tutorial not found" });
                }
                res.status(200).json({
                    message: "findOne OK",
                    data: tutorial
                });
            }
            catch (err) {
                res.status(500).json({
                    message: "Internal Server Error!"
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tutorialId = parseInt(req.params.id, 10);
                if (isNaN(tutorialId)) {
                    return res.status(400).json({ message: "Invalid tutorial ID" });
                }
                const tutorial = yield tutorial_repository_1.default.delete(tutorialId);
                res.status(200).json({
                    message: "delete OK",
                });
            }
            catch (err) {
                res.status(500).json({
                    message: "Internal Server Error!"
                });
            }
        });
    }
}
exports.default = TutorialController;
