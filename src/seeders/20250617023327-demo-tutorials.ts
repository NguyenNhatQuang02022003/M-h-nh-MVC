import { QueryInterface } from 'sequelize';

class TutorialSeeder {
  public async up(queryInterface: QueryInterface): Promise<void> {
    await queryInterface.bulkInsert('tutorials', [
      { title: 'Hoc MySQL co ban 1', description: 'Huong dan hoc MySQL tu dau 1', published: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Express 2', description: 'Tutorial 2', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: 'express-typescript-example 3', description: 'Bezkoder Tutorial 3', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: '2025 4', description: 'phat tai phat loc 4', published: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'NAM 2026 5', description: 'chuc mung nam moi 5', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: '2027 6', description: 'phat tai phat loc 6', published: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Doraemon 7', description: 'Updated Description 7', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Hoc MySQL co ban 8', description: 'Huong dan hoc MySQL tu dau 8', published: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Express 9', description: 'Tutorial 9', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: 'express-typescript-example 10', description: 'Bezkoder Tutorial 10', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: '2025 11', description: 'phat tai phat loc 11', published: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'NAM 2026 12', description: 'chuc mung nam moi 12', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: '2027 13', description: 'phat tai phat loc 13', published: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Doraemon 14', description: 'Updated Description 14', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Hoc MySQL co ban 15', description: 'Huong dan hoc MySQL tu dau 15', published: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Express 16', description: 'Tutorial 16', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: 'express-typescript-example 17', description: 'Bezkoder Tutorial 17', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: '2025 18', description: 'phat tai phat loc 18', published: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'NAM 2026 19', description: 'chuc mung nam moi 19', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: '2027 20', description: 'phat tai phat loc 20', published: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Doraemon 21', description: 'Updated Description 21', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Hoc MySQL co ban 22', description: 'Huong dan hoc MySQL tu dau 22', published: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Express 23', description: 'Tutorial 23', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: 'express-typescript-example 24', description: 'Bezkoder Tutorial 24', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: '2025 25', description: 'phat tai phat loc 25', published: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'NAM 2026 26', description: 'chuc mung nam moi 26', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: '2027 27', description: 'phat tai phat loc 27', published: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Doraemon 28', description: 'Updated Description 28', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Hoc MySQL co ban 29', description: 'Huong dan hoc MySQL tu dau 29', published: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Express 30', description: 'Tutorial 30', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: 'express-typescript-example 31', description: 'Bezkoder Tutorial 31', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: '2025 32', description: 'phat tai phat loc 32', published: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'NAM 2026 33', description: 'chuc mung nam moi 33', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: '2027 34', description: 'phat tai phat loc 34', published: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Doraemon 35', description: 'Updated Description 35', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Hoc MySQL co ban 36', description: 'Huong dan hoc MySQL tu dau 36', published: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Express 37', description: 'Tutorial 37', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: 'express-typescript-example 38', description: 'Bezkoder Tutorial 38', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: '2025 39', description: 'phat tai phat loc 39', published: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'NAM 2026 40', description: 'chuc mung nam moi 40', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: '2027 41', description: 'phat tai phat loc 41', published: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Doraemon 42', description: 'Updated Description 42', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Hoc MySQL co ban 43', description: 'Huong dan hoc MySQL tu dau 43', published: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Express 44', description: 'Tutorial 44', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: 'express-typescript-example 45', description: 'Bezkoder Tutorial 45', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: '2025 46', description: 'phat tai phat loc 46', published: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'NAM 2026 47', description: 'chuc mung nam moi 47', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: '2027 48', description: 'phat tai phat loc 48', published: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Doraemon 49', description: 'Updated Description 49', published: 0, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Hoc MySQL co ban 50', description: 'Huong dan hoc MySQL tu dau 50', published: 1, createdAt: new Date(), updatedAt: new Date() }
    ]);
  }

  public async down(queryInterface: QueryInterface): Promise<void> {
    await queryInterface.bulkDelete('tutorials', {}, {});
  }
}

const seeder = new TutorialSeeder();

module.exports = {
  up: (queryInterface: QueryInterface) => seeder.up(queryInterface),
  down: (queryInterface: QueryInterface) => seeder.down(queryInterface),
};
