import { Request, Response } from "express";
import Tutorial from "../models/tutorial.model";
import tutorialRepository from "../repositories/tutorial.repository";

export default class TutorialController {
  async create(req: Request, res: Response) {
    const { title, description, published } = req.body;

    const userId = res.locals.user.id; //  Lấy userId từ token đã giải mã

    try {
      const tutorial = await tutorialRepository.save(title, description, published, userId); //  Truyền userId

      res.status(201).json({
        message: "create OK",
        data: tutorial
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const { title, description, published } = req.body;
      const userId = res.locals.user.id; // Lấy userId từ token

      const existingTutorial = await tutorialRepository.retrieveById(id, userId); // Tìm tutorial theo userId

      if (!existingTutorial) {
        return res.status(404).json({
          message: "Tutorial not found or access denied"
        });
      }

      existingTutorial.title = title ?? existingTutorial.title;
      existingTutorial.description = description ?? existingTutorial.description;
      existingTutorial.published = published ?? existingTutorial.published;

      await tutorialRepository.update(existingTutorial, userId); // Truyền userId vào update

      res.status(200).json({
        message: "update OK",
        data: existingTutorial,
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const offset = parseInt(req.query.offset as string, 10) || 0;
      const limit = parseInt(req.query.limit as string, 10) || 10;

      const userId = res.locals.user.id; // Lấy userId từ token

      const tutorials = await tutorialRepository.retrieveAll(offset, limit, userId); // Truyền userId

      res.status(200).json({
        message: "findAll OK",
        data: tutorials
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const tutorialId = parseInt(req.params.id, 10);
      const userId = res.locals.user.id; // Lấy userId từ token

      if (isNaN(tutorialId)) {
        return res.status(400).json({ message: "Invalid tutorial ID" });
      }

      const tutorial = await tutorialRepository.retrieveById(tutorialId, userId); // Truyền userId

      if (!tutorial) {
        return res.status(404).json({ message: "Tutorial not found or access denied" });
      }

      res.status(200).json({
        message: "findOne OK",
        data: tutorial
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const tutorialId = parseInt(req.params.id, 10);
      const userId = res.locals.user.id; // Lấy userId từ token

      if (isNaN(tutorialId)) {
        return res.status(400).json({ message: "Invalid tutorial ID" });
      }

      const deletedCount = await tutorialRepository.delete(tutorialId, userId); // Truyền userId

      if (deletedCount === 0) {
        return res.status(404).json({
          message: "Tutorial not found or access denied"
        });
      }

      res.status(200).json({
        message: "delete OK",
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }

  async deleteAll(req: Request, res: Response) {
    try {
      const userId = res.locals.user.id; // lấy userId từ token

      const count = await tutorialRepository.deleteAll(userId); // Truyền userId

      res.status(200).json({
        message: "All tutorials deleted for user",
        deleted: count
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }
}
