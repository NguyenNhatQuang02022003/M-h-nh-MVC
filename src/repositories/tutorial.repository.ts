import Tutorial from "../models/tutorial.model";
import { Op } from "sequelize";

interface ITutorialRepository {
  save(title: string, description: string, published: boolean, userId: number): Promise<Tutorial>; 
  retrieveAll(offset: number, limit: number, userId: number): Promise<Tutorial[]>; 
  retrieveById(tutorialId: number, userId: number): Promise<Tutorial | null>;  
  update(tutorial: Tutorial, userId: number): Promise<number>; 
  delete(tutorialId: number, userId: number): Promise<number>;  
  deleteAll(userId: number): Promise<number>; 
}

// cách giải quyết vấn đề:
// thêm UserId cho tutorials và dùng where để truy vấn ra UserId đang đăng nhập để trao quyền CRUD hợp lý

class TutorialRepository implements ITutorialRepository {
  //  TẠO mới Tutorial với userId
  async save(title: string, description: string, published: boolean, userId: number): Promise<Tutorial> {
    try {
      return await Tutorial.create({
        title,
        description,
        published,
        userId
      });
    } catch (err) {
      throw new Error("Failed to create Tutorial!");
    }
  }

  async retrieveAll(offset: number, limit: number, userId: number): Promise<Tutorial[]> {
    try {
      return await Tutorial.findAll({
        //thêm where để chỉ lấy tutorial của user hiện tại đang đăng nhập
        where: { userId },
        offset,
        limit,
        order: [["id", "ASC"]],
      });
    } catch (error) {
      throw new Error("Failed to retrieve Tutorials!");
    }
  }

  async retrieveById(tutorialId: number, userId: number): Promise<Tutorial | null> {
    try {
      return await Tutorial.findOne({
        where: {
          id: tutorialId,
          userId // chỉ lấy tutorial nếu đúng userId
        }
      });
    } catch (error) {
      throw new Error("Failed to retrieve Tutorial!");
    }
  }

  async update(tutorial: Tutorial, userId: number): Promise<number> {
    const { id, title, description, published } = tutorial;

    try {
      const [affectedRows] = await Tutorial.update(
        { title, description, published },
        {
          where: {
            id,
            userId  // chỉ cập nhật nếu đúng userId
          }
        }
      );

      return affectedRows;
    } catch (error) {
      throw new Error("Failed to update Tutorial!");
    }
  }

  async delete(tutorialId: number, userId: number): Promise<number> {
    try {
      return await Tutorial.destroy({
        where: {
          id: tutorialId,
          userId //  chỉ xoá nếu đúng userId
        }
      });
    } catch (error) {
      throw new Error("Failed to delete Tutorial!");
    }
  }

  async deleteAll(userId: number): Promise<number> {
    try {
      return await Tutorial.destroy({
        where: { userId }, // chỉ xoá tutorial của user này
        truncate: false
      });
    } catch (error) {
      throw new Error("Failed to delete Tutorials!");
    }
  }
}

export default new TutorialRepository();
