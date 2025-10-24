'use strict';

// Подключаем индекс всех моделей
// repository.cjs
const db = require('../models/index.cjs'); // явное указание файла
const { Game } = db;


/**
 * Сохраняет массив игр в БД
 * @param {Array} games - массив объектов { title, description, image }
 */
async function saveGames(games) {
  if (!games || games.length === 0) {
    console.log('⚠️ Нет игр для сохранения');
    return;
  }

  let savedCount = 0;

  for (const game of games) {
    try {
      await Game.create({
        title: game.title,
        description: game.description,
        image: game.image
      });
      savedCount++;
    } catch (err) {
      console.error(`❌ Ошибка при сохранении игры "${game.title}": ${err.message}`);
    }
  }

  console.log(`💾 В БД сохранено ${savedCount} игр из ${games.length}`);
}

module.exports = { saveGames };
