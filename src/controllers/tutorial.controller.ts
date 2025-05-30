import { Request, Response } from "express";
import Tutorial from "../models/tutorial.model";
import tutorialRepository from "../repositories/tutorial.repository";

export default class TutorialController {
  async create(req: Request, res: Response) {
    // định nghĩa request là gì và response 
    // sau đó sử dụng từ logic model
    const { title, description, published } = req.body;
    try {
      const tutorial = await tutorialRepository.save(title, description, published);

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
      const id = req.params.id;
      const { title, description, published } = req.body;

      // 1. Tìm tutorial theo ID
      const existingTutorial = await tutorialRepository.retrieveById(Number(id));

      if (!existingTutorial) {
        return res.status(404).json({
          message: "Tutorial not found"
        });
      }

      // 2. Cập nhật các trường (nếu có giá trị mới)
      existingTutorial.title = title ?? existingTutorial.title;
      existingTutorial.description = description ?? existingTutorial.description;
      existingTutorial.published = published ?? existingTutorial.published;

      // 3. Lưu thay đổi vào DB
      await tutorialRepository.update(existingTutorial);

      // 4. Trả kết quả
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
      
    const tutorials = await tutorialRepository.retrieveAll();

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

    if (isNaN(tutorialId)) {
      return res.status(400).json({ message: "Invalid tutorial ID" });
    }

    const tutorial = await tutorialRepository.retrieveById(tutorialId);

    if (!tutorial) {
      return res.status(404).json({ message: "Tutorial not found" });
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

    if (isNaN(tutorialId)) {
      return res.status(400).json({ message: "Invalid tutorial ID" });
    }
      const tutorial = await tutorialRepository.delete(tutorialId);
      res.status(200).json({
        message: "delete OK",
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }
}