import Tutorial from "../models/tutorial.model";
import { Op } from "sequelize";

interface ITutorialRepository {
  save(title: string, description: string, published: boolean): Promise<Tutorial>;
  retrieveAll(searchParams: {title: string, published: boolean}): Promise<Tutorial[]>;
  retrieveById(tutorialId: number): Promise<Tutorial | null>;
  update(tutorial: Tutorial): Promise<number>;
  delete(tutorialId: number): Promise<number>;
  deleteAll(): Promise<number>;
}


class TutorialRepository implements ITutorialRepository {
  async save(title: string, description: string, published: boolean): Promise<Tutorial> { 
    try {
        return await Tutorial.create({
          title: title,
          description: description,
          published: published
        });
      } catch (err) {
        throw new Error("Failed to create Tutorial!");
      }
  }

  async retrieveAll(): Promise<Tutorial[]> { 
    try {
    
        return await Tutorial.findAll({});
      } catch (error) {
        throw new Error("Failed to retrieve Tutorials!");
      }
   }

  async retrieveById(tutorialId: number): Promise<Tutorial | null> {
      try {
      return await Tutorial.findByPk(tutorialId);
    } catch (error) {
      throw new Error("Failed to retrieve Tutorials!");
    }
  }

  async update(tutorial: Tutorial): Promise<number> { 
    const { id, title, description, published } = tutorial;

  try {
    const affectedRows = await Tutorial.update(
      { title, description, published },
      { where: { id: id } }
    );

    return affectedRows[0];
  } catch (error) {
    throw new Error("Failed to update Tutorial!");
  }
  }

  async delete(tutorialId: number): Promise<number> { 
    try {
    const affectedRows = await Tutorial.destroy({ where: { id: tutorialId } });

    return affectedRows;
  } catch (error) {
    throw new Error("Failed to delete Tutorial!");
  }
  }

  async deleteAll(): Promise<number> {
    try {
    return Tutorial.destroy({
      where: {},
      truncate: false
    });
  } catch (error) {
    throw new Error("Failed to delete Tutorials!");
  }
   }
}

export default new TutorialRepository();